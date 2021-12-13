const {list,insert}=require("../services/ChatMessageService")
const httpStatus=require("http-status")

const index=(req,res)=>{
    list().then(response=>{
        res.status(httpStatus.OK).send(response)
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

const create=(req,res)=>{
    req.body.user_id=req.user;
    insert(req.body).then(response=>{
        res.status(httpStatus.OK).send(response)
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

module.exports={
    index,
    create,
}