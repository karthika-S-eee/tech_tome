const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true
    },
    email:{
    type:String,
    require:true,
    unique: true
    },
    password:{
        type:String,
        require:true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    }
})

adminSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
})

const admin = new mongoose.model("admin",adminSchema)
module.exports=admin;