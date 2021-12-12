const Mongoose=require("mongoose")

const ChatMessagesSchema=new Mongoose.Schema({
    message:String,
    user_id:{
        type:Mongoose.Types.ObjectId,
        ref:"user"
    },
    sub_message:[
        {
            type:Mongoose.Types.ObjectId,
            ref:"chat_messages"
        }
    ]
},{timestamps:true,versionKey:false})

module.exports=Mongoose.model("chat_messages",ChatMessagesSchema)