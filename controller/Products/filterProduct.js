
const ProductModel=require("../../models/ProductModel")
const filterproduct= async(req,res)=>{
try {
 
const categorylist=req?.body?.category ||[]

const product= await ProductModel.find({ 

    category: {
        "$in":categorylist
    }

})


    res.status(200).json({
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

module.exports=  filterproduct