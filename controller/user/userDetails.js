
const userModel = require("../../models/userModel")
const userDetails= async(req,res)=>{
try {
    // console.log("user_id", req.user.id)
       const user= await userModel.findById(req.user.id)
       res.status(200).json({
        data:user,
        error:false,
        success:true,
        message:"user details"
        })
console.log("user",user)
} catch (error) {
    res.status(400).json({
        message:error.message||error,
        error:true,
        success:false
    })
}
}
module.exports=userDetails