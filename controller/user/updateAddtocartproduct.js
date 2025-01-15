
const AddtocartModel=require("../../models/CartProductModel")
const updateaddtoproduct = async(req,res)=>{
try {
    const currentuser=  req.user.id 
    const addtocartproductId=req.body.id
    const qty=req.body.quantity
    // console.log("quantityid",qty)
    // console.log("prouctidcartupdate",addtocartproductId)
// const updateproducts= await AddtocartModel.updateOne(addtocartproductId,{
//     ...(qty&&{quantity:qty})
// })
const updateproducts = await AddtocartModel.updateOne(
    { ProductId: addtocartproductId }, // Wrap the ID in an object
    { ...(qty && { quantity: qty }) }
  );

res.json({
    message:"product updated",
    data:updateproducts,
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

module.exports= updateaddtoproduct