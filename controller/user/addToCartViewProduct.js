
const AddtocartModel=require("../../models/CartProductModel")
const addtocartviewproduct = async(req,res)=>{
try {
    const currentuser=  req.user.id 

const allproducts= await AddtocartModel.find({
    userId:currentuser 
}).populate("ProductId")

    res.json({
        message:"ok",
        data:allproducts,
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

module.exports= addtocartviewproduct 