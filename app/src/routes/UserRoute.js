const express=require("express")
const {create,index}=require("../controllers/UsersController")

const router=express.Router()

router.route("/").get(index)
router.route("/").post(create)

module.exports=router