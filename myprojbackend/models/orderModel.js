const mongoose=require("mongoose");
const orderSchema=new mongoose.Schema(
    {
         id:{
            type:String,
            require:true
        },
        user_id:{
            type:String,
            require:true
        },
        user_email:{
            type:String,
            require:true
        },
        cust_address:{
            type:String,
            require:true
        },
        cust_name:{
            type:String,
            require:true
        },
        cust_phn:{
            type:Number,
            require:true
        },
        orderDate:{
            type:Date,
            default:Date.now
        },
        estDate:{
            type:Date,
          deafult:()=>{ 
            let date= new Date();
            Date.setDate(date.getDate()+10 )}
        },
        tot_Amount:{
            type:Number
    
        },
        orderStatus:{
            type:String
    
        },
        products:[{
            product_id:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }]
    
    
    });
    const orderModel = mongoose.model('order',orderSchema);
    module.exports=orderModel
   