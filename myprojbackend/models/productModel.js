const mongoose =require('mongoose')
const productSchema = new mongoose.Schema({
    id:{
        type:String,
       unique:true
    },
    title:{
        type:String,
        require:true
    },
    subtitle:{
        type:String,
        require:true
    },
    isbn13:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    authors:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    isbn10:{
        type:String,
        require:true
    },
    pages:{
        type:String,
        require:true
    },
    years:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    }

   
})

const product= new mongoose.model("product",productSchema)

module.exports=product;