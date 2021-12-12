const ChatMessage=require("../models/ChatMessages")
const insert=(data)=>{
    const chatMessage=new ChatMessage(data)
    return chatMessage.save();
}
const list=(where)=>{
    return ChatMessage.find(where || {}).populate({
        path:"user_id",
        select:"first_name last_name nickname profile_image",
    });
}
const modify=(data,id)=>{
    return ChatMessage.findByIdAndUpdate(id,data,{new:true})
}
const remove=(id)=>{
    return ChatMessage.findByIdAndDelete(id)
}
module.exports={
    insert,
    list,
    modify,
    remove,
}