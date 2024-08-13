const ProductControllers=require("../controller/productControllers")
const express = require("express")
const router = express.Router();
const adminAuth=require("../middlewares/adminauth")
const auth= require('../middlewares/auth');

router.get("/admin/get",adminAuth,ProductControllers.getProducts)
router.post("/create", adminAuth,ProductControllers.createProduct)
router.get("/get",auth,ProductControllers.getProducts)
module.exports= router;