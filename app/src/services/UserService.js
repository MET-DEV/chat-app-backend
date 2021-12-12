const User=require("../models/Users")
const insert=(data)=>{
    const user=new User(data)
    return user.save();
}
const loginUser=(data)=>{
    return User.findOne(data);
}
const list=()=>{
    return User.find({})
}
const modify=(where,data)=>{
    return User.findByIdAndUpdate(where,data,{new:true})
}
const remove=(id)=>{
    return User.findByIdAndDelete(id)
}
module.exports={
    insert,
    loginUser,
    list,
    modify,
    remove,
}
