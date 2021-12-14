const express=require("express")
const {create,index,login}=require("../controllers/UsersController")
const validate=require("../middlewares/validate")
const validationSchemas=require("../validations/UserValidation")
const router=express.Router()

router.route("/").get(index)


router.route("/").post(validate(validationSchemas.createValidation),create)
router.route("/login").post(validate(validationSchemas.loginValidation),login)



module.exports=router