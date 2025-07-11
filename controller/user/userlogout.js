

const userlogout= async(req,res)=>{
    try {
        
        res.clearCookie("token")
        res.json({
            message:"logout successfully",
            error:false,
            success:true,
            data:[]
            })
    } catch (error) {
        res.json({
            message:error.message||error,
            error:true,
            success:false
            })
    }
}
module.exports =userlogout
