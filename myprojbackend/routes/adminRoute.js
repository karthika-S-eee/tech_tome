const AdminController=require('../controller/adminController');
const userController=require('../controller/userController');

const express=require("express")
const router= express.Router();

router.post("/login",AdminController.adminLogin);
router.post("/register",AdminController.registerAdmin);
module.exports=router;