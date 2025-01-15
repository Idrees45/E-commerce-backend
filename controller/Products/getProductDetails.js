
const ProductModel=require("../../models/ProductModel")
const GetProductDeatail= async(req,res)=>{
try {
    const {ProductId}=req.body
const Products= await ProductModel.findById(ProductId)

    res.json({
        message:"ok",
        data:Products,
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

module.exports=GetProductDeatail