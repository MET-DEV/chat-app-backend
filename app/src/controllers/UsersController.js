const httpStatus = require("http-status")
const {hashPassword,generateAccessToken,generateRefreshToken}=require("../scripts/utils/security/helper")
const {insert,list,loginUser}=require("../services/UserService")


const create=(req,res)=>{
    req.body.password=hashPassword(req.body.password)
    insert(req.body).then(response=>{
        res.status(httpStatus.CREATED).send(response)
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

const index=(req,res)=>{
    list().then(response=>{
        res.status(httpStatus.OK).send(response)
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

const login=(req,res)=>{
    req.body.password=hashPassword(req.body.password)
    loginUser(req.body).then(user=>{
        if(!user) return res.status(httpStatus.NOT_FOUND).send({message:"User not found"})
        user={
            ...user.toObject(),
            tokens:{
                access_token:generateAccessToken(user),
                refresh_token:generateRefreshToken(user),
            }
        }
        delete user.password;
        res.status(httpStatus.OK).send(user);
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}



module.exports={
    create,
    index,
    login
    

}