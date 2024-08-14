 const cartController=require('../controller/cartController')
const auth=require("../middlewares/auth")
const express=require('express');
const router = express.Router();

router.post("/",auth,cartController.createCart)
 router.get("/",auth,cartController.getCart)
 router.delete("/delete/:id",auth,cartController.deleteCart)
module.exports=router;