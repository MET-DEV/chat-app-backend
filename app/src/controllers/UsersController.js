const httpStatus = require("http-status")
const {hashPassword}=require("../scripts/utils/security/helper")
const {insert}=require("../services/Users")
const create=(req,res)=>{
    req.body.password=hashPassword(req.body.password)
    insert(req.body).then(response=>{
        res.status(httpStatus.CREATED).send(response)
    }).catch(e=>res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

module.exports={
    create,

}