const jwt=require('jsonwebtoken')
const User=require('../models/userModel')
const auth=async(req,res,next)=>{
    const token=req.header('Authorization').split(" ")[1];
    if(!token){
        return res.status(400).json({error:"No Token,authorization denied"});
    }
    try{
        const decoded=jwt.verify(token,"secret_token")
       // const user = await User.findById(decoded.user_id)
        req.user=decoded;
        next();
    }
    catch(err){
        res.status(401).json({ error:"Token is not valid"});
    }
};
module.exports=auth;