const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    user_id:String,
    products:[{
        product_id:String,
        quantity:String
    }],
})

const cart=mongoose.model("cart",cartSchema);

module.exports=cart;