const Mongoose=require("mongoose")

const UserSchema=new Mongoose.Schema({
    first_name:String,
    last_name:String,
    nickname:String,
    email:String,
    password:String,
    profile_image:String
},{timestamps:true,versionKey:false})

module.exports=Mongoose.model("user",UserSchema)