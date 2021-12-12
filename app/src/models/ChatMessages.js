const Mongoose=require("mongoose")

const ChatMessagesSchema=new Mongoose.Schema({
    message:String,
    user_id:{
        type:Mongoose.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true,versionKey:false})

module.exports=Mongoose.model("chat_messages",ChatMessagesSchema)