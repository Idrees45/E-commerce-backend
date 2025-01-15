
const AddtocartModel=require("../../models/CartProductModel")
const deletecart = async(req,res)=>{
try {
    // const currentuser=  req.user.id 
  
    const addtocartproductId=req.body._id
    console.log("deletecartid",addtocartproductId)
const deleteproduct= await  AddtocartModel.deleteOne({_id:addtocartproductId})
    


res.json({
    message:"product Deleted",
    data:deleteproduct,
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

module.exports= deletecart