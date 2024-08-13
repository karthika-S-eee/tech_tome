const express= require("express");
const app=express();
const cors=require('cors');

const productRoutes=require("./routes/productRoutes")
const userRoutes=require("./routes/userRoute")
const adminRoutes=require("./routes/adminRoute")
const orderRoutes=require('./routes/orderRoute');
app.use(cors());

app.use(express.json());
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://karthikas:karthikas1411@cluster0.birgrjr.mongodb.net/bookstore")
.then(()=>{
    console.log("connected to database");
})

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/products",productRoutes);
app.use("/order",orderRoutes);



app.listen(3000,()=>{
console.log("server running in port 3000")
})