const {createUser,userlogin}=require("../controller/userController")
const express=require("express")
const router= express.Router();

router.post("/register",createUser);
router.post("/login",userlogin);

module.exports=router;