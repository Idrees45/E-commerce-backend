const userModel = require("../../models/userModel")

const alluser= async(req,res)=>{
    try {
        console.log("req.user shab",req.user.id)
const alluser= await userModel.find({})
res.status(200).json({
    message:"All-users",
    data:alluser,
    success:true,
    error:false
})
    } catch (error) {
        res.status(400).json({
            message:error.message||error,
            error:true,
            success:false
        })     
    }
}
module.exports=alluser