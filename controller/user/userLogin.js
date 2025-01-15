const userModel = require("../../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const userLogin= async(req,res)=>{
    try {
        const {email,password}=req.body
        if (!email) {
            throw new Error('email is required')
        }
     
        if (!password) {
            throw new Error('pasword is required')
        }
        const user = await userModel.findOne({ email: email });
        if (!user) {
            throw new Error("User not found");
        }
        const checkPassword=  await bcrypt.compare(password,user.password)
        // console.log("checkpassword",checkPassword)
        if(checkPassword){
            const tokenData={
                _id:user._id,
                email:user.email
            }
          const token=   jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{ expiresIn: '9h' })
          const tokenoption= {
            httpOnly:true,
            secure:true
          }
          res.cookie("token",token).json({
            message:"Login successfully",
            data:token,
            success:true,
            error:false
          })
        }else{
            throw new Error("Password does not match")
        }

    } catch (error) {
        res.json({
        message:error.message||error,
        error:true,
        success:false
        })
    }
    }
    module.exports=userLogin