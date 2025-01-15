
const ProductModel=require("../../models/ProductModel")
const getCategoryProduct= async(req,res)=>{
try {
    
const allProducts= await ProductModel.distinct("category").lean()

console.log("catergory_product",allProducts)
 const ProductByCategory=[]

for(const category of allProducts){
const product= await  ProductModel.findOne({category}).lean()
if(product){
    ProductByCategory.push(product)
}
}
    res.json({
        message:" category Products",
        data:ProductByCategory,
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

module.exports= getCategoryProduct