const express = require('express');
const router = express.Router();
const auth= require('../middlewares/auth');
//const adminAuth = require('../middleware/adminauth');
const orderController=require('../controller/orderController');

router.post('/order', auth, orderController.createOrder);
router.get('/getorder',auth,orderController.getorder);

module.exports=router;