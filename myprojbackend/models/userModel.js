const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema= new mongoose.Schema({
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

userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next()
    }
    // const salt= await bcrypt.genSalt(10);
    // this.password=await bcrypt.hash(this.password,salt);
    // next()
    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
})

const user = new mongoose.model("user",userSchema)
module.exports=user;