
const ProductModel=require("../../models/ProductModel")
const SearchProducts= async(req,res)=>{


try {
    
const query= req.query.q
const regex= new RegExp(query,'i','g')

const product= await ProductModel.find({
    "$or":[{
        ProductName:regex,
    },
    {
        category:regex
    }
]
}).lean()

    res.json({
        message:" searched product list",
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

module.exports=SearchProducts