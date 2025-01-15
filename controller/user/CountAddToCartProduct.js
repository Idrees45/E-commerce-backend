
const AddtocartModel=require("../../models/CartProductModel")
const CountaddToCartProduct= async(req,res)=>{
try {
//     const {ProductId}=req?.body
    const userId=  req.user.id 

const count= await AddtocartModel.countDocuments({
    userId:userId 
})

    res.json({
        message:"ok",
        data:{
            count:count
        },
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

module.exports=CountaddToCartProduct