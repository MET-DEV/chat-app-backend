const express=require('express')
const {create,index}=require("../controllers/ChatMessagesController")
const validate=require("../middlewares/validate")
const validationSchemas=require("../validations/UserValidation")
const authenticate=require("../middlewares/authenticate")


const router=express.Router()

router.route("/").get(authenticate,index)

router.route("/").post(authenticate,validate(validationSchemas.createValidation),create)


module.exports=router