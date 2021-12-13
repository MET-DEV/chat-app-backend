const express=require('express')
const {create,index}=require("../controllers/ChatMessagesController")
const authenticate=require("../middlewares/authenticate")


const router=express.Router()

router.route("/").get(authenticate,index)

router.route("/").post(authenticate,create)


module.exports=router