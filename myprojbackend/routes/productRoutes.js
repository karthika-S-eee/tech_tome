const ProductControllers=require("../controller/productControllers")
const express = require("express")
const router = express.Router();
const adminAuth=require("../middlewares/adminauth")
const auth= require('../middlewares/auth');

router.get("/admin/get",ProductControllers.getProducts)
router.post("/create", adminAuth,ProductControllers.createProduct)
router.get("/get",ProductControllers.getProducts)
module.exports= router;