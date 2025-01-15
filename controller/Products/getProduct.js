
const ProductModel=require("../../models/ProductModel")
const GetProducts= async(req,res)=>{
try {
    
const allProducts= await ProductModel.find().sort({createdAt:-1})

    res.json({
        message:" All Products",
        data:allProducts,
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

module.exports=GetProducts