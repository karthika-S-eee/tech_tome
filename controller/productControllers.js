const product = require("../models/productModel")
const User=require('../models/userModel')
const{v4:uuidv4}= require('uuid');


const getProducts=async(req,res)=>{
    try{
        const products=await product.find()
        res.send(products)
    }
    catch(err){
        console.log(err)
    }
};




const createProduct = async(req,res)=>{
    const adminId = req.user._id;

    try{
   
    const{title,
        subtitle,
        isbn13:require,
        price,
        image,
        url,
        authors,
        publisher,
        language,
        isbn10,
        pages,
        years,
        rating, desc} = req.body;
    console.log(title);

        try{
    const products = new product({
        id:uuidv4(),
        title,
            subtitle,
            isbn13:require,
            price,
            image,
            url,
            authors,
            publisher,
            language,
            isbn10,
            pages,
            years,
            rating,
            desc
    })
    await products.save();
    res.status(200).json("Product created successfully");
}
catch(err){
    res.status(500).json({message:"internal server error"})
}}
catch(err){ res.status(500).json({message:"internal server error",err})}};


module.exports={createProduct,getProducts}