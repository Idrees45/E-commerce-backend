const mongoose= require("mongoose")

 const CartSchema=  mongoose.Schema({
  ProductId:{
    ref:'Product',
    type:String
  },
  quantity:Number,
  userId:String
},
{
    timestamps:true
}
)

const cartModel= mongoose.model("addToCart",CartSchema)

module.exports= cartModel