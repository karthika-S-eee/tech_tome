const order=require('../models/cartModel');
const cart=require("../models/cartModel");
const ProductModel=require("../models/productModel")
const { v4: uuidv4 } = require('uuid');

const createOrder=async(req,res)=>{
    const {cust_name, cust_phno, cust_address} = req.body;
    try{
        const {userId}=req.user;
        const {user_email}=req.user;

        const userCart=await cart.findOne({userId});
       
        if(!userCart){
            return res.status(400).json({message:"cart is empty"});
        }
       
        const newOrder = new order({
            id:uuidv4(),
            userId,
            user_email, 
            cust_name, 
            cust_phno,
            cust_address,
            products: cart.product,
            orderDate:new Date()
        });
        console.log(newOrder)
        const savedOrder = await newOrder.save();

        
        await userCart.deleteOne({ userId });
        return res.status(201).json({ message: 'Order placed successfully', order: savedOrder });

    }
    catch(err){
        res.status(404).json({message:"internal server error"})
    }
}


// const getorder=async(req,res)=>{
//     const{userId}=req.user;
//     const orderDetails=await order.findOne({userId})
//     const productdetails= await productModel.finOne({id:product.product_id})
//     let orderDate=new Date();
// let estDate=new Date(new Date().setDate(new Date().getDate() + 10))
//     if(productdetails){
//       product.product_id,
//       product.quantity,
//       orderDate:new Date(),
      
//     }
// }

const getorder=async(req,res)=>{
    const userid = req.user.id; 
      const orderDetails = await order.find({ userid });
      const allProducts = [];
      for (const order of orderDetails) {
        for (const product of order.products) {
          const productDetails = await ProductModel.findOne({ id: product.product_id });
          if (productDetails) {
            allProducts.push({
              productid: product.product_id,
              quantity: product.quantity,
              delDate: order.estDate,
              title: productDetails.title, 
              price: productDetails.price, 
              image:productDetails.image
            });
          } else {
            console.error("Product not found");
          }
        }
      }
      console.log(orderDetails);
  }



module.exports={createOrder,getorder};