const mongoose= require("mongoose")

 const ProductSchema=  mongoose.Schema({
    ProductName:String,
    brandName:String,
    category:String,
    productImage:[],
    description:String,
    price:Number,
    sellingPrice:Number
},
{
    timestamps:true
}
)

const ProductModel= mongoose.model("Product",ProductSchema)

module.exports= ProductModel