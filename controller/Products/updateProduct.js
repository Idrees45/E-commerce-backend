

const UploadProductPermission = require("../../helpers/UploadProductPermission")
const ProductModel=require("../../models/ProductModel")

const updateProduct= async(req,res)=>{
    try {
const sessionUserId=req.userId
if(!UploadProductPermission(sessionUserId)){
throw new Error("Permission denied")
}
const {_id,...resBody}=req.body
console.log("Product ID:", _id);  
const updateAdminProduct=  await  ProductModel.findByIdAndUpdate(_id,resBody,{
    new:true
})

        res.json({
            message:"Product updated successfully",
            data:updateAdminProduct,
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

module.exports= updateProduct