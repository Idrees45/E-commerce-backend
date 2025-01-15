const userModel = require("../../models/userModel")

const updateuser= async(req,res)=>{
    try {
        const sessionuser=req.userId
const {userid,email,name,role}=req.body
const payload ={
  ...(email&&{email:email}),
  ...(name&&{name:name}),
  ...(role&&{role:role}),
}
const user=await userModel.findById(sessionuser)
const updatuser= await userModel.findByIdAndUpdate(userid,payload)
res.json({
    message:"user Updated",
    data:updateuser,
    success:true,
    error:false
})
    } catch (error) {
        res.json({
            message: error.message||error,
            error: true,
            success: false
        })
        
        
    }
}

module.exports=updateuser