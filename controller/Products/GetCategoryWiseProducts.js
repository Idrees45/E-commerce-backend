
const ProductModel=require("../../models/ProductModel")
const getCategorywiseProduct= async(req,res)=>{
try {
    
const {category}=req?.body||req?.query
const product= await ProductModel.find({ category:category})
    res.json({
        message:" Products",
        data:product,
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

module.exports=  getCategorywiseProduct