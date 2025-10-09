const Cart= require("../models/cartModel");
const Product=require('../models/productModel');

const createCart=async(req,res)=>{
    const{user_id}=req.user;
    const{product_id,quantity}=req.body

    let cart= await Cart.findOne({user_id});

    if(!cart){
  cart=new Cart({
    user_id,
    products:[
        {
            product_id,
            quantity,
        }
    ]
  });
    }
    else{
        const ProductIndex=cart.products.findIndex(
            (prod)=>prod.product_id===product_id
        );
        if(ProductIndex>-1){
            cart.products[ProductIndex].quantity=quantity;
   
        }
        else{
            cart.products.push({product_id,quantity});
            }
        }
   await cart.save();
    res.status(200).json({message:"product added/updated in cart",cart})
        
};

const getCart = async(req,res)=>{
    const {user_id} = req.user;
    const user = await Cart.findOne({user_id});
    console.log(user)
    try{
    let subtotal = 0;
    if(user){
        const productDetails = user.products;
        
        const details = await Promise.all(productDetails.map( async(item)=>{
            const product = await Product.findOne({id:item.product_id});
console.log(product)
        subtotal += product.price * item.quantity; 
            return({
                title:product.title,
                price:product.price,
                image:product.image,
                quantity:item.quantity
            })
            
        }
        ))
        res.send({details,subtotal});
    }else{
        res.status(404).json({message:"User not found"})
    }
}
catch(err){
    res.status(500).json({message:"Server error"})
}
}

const deleteCart=async(req,res)=>{
    const {user_id}=req.user;
    const product_id=req.params.id
    try{
let cart=await Cart.findOne({user_id});
if(!cart){
    return res.status(404).json({message:"user not found"})
}
const cartIndex = cart.products.findIndex((product)=>product.product_id === product_id);

if(cart.products.length<=1){
    await Cart.deleteOne({
        user_id
    })
    return res.status(200).json({message:"Product deleted from cart"});
}
else{
    cart.products=cart.products.filter((prod)=>
        prod.id!=product_id
    )
    cart.save()
    return res.status(200).json({message:"Product deleted from cart"});
}
        // if(cartIndex === -1){
        //     return res.status(404).json({message:"Product not found in cart"});

        
        // }
        // cart.products.splice(cartIndex,1);
        // if(cart.products.length > 0){
        //     await cart.save();
        // }else{
        //     await Cart.deleteOne({
        //         userId
        //     })
        // }
        
        // return res.status(200).json({message:"Product deleted from cart"});
    }
    catch(err){
        return res.status(401).json({message:"internal server error",err})
    }
}
 module.exports={deleteCart,getCart,createCart};