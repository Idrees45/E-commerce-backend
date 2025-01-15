
const AddtocartModel=require("../../models/CartProductModel")
const addToCart= async(req,res)=>{
try {
    const {ProductId}=req?.body
const currentuser=  req.user.id 
console.log("cartId",ProductId)
console.log("cartUserId",currentuser)
// const isproductAvailable= await AddtocartModel.find({ProductId})
const isproductAvailable = await AddtocartModel.findOne({ ProductId, userId: currentuser });
if(!currentuser){
    return res.json({
        message:"please login",
        success:false,
        error:true
    })
}

if(isproductAvailable){
    return res.json({
        message:"Already exist in Add to cart",
        success:false,
        error:true
    })
}

const payload={
    ProductId:ProductId,
    quantity:1,
    userId:currentuser
}
const newaddtocart = new  AddtocartModel(payload)
const saveProduct=  await  newaddtocart.save()
    res.json({
        message:"product Added to cart",
        data:saveProduct,
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

module.exports=addToCart