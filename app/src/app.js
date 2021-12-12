const {hashPassword}=require("./scripts/utils/security/helper")
const express=require("express")
const config=require("./config");
const helmet = require("helmet");




config();


const app=express()
app.use(express.json())
app.use(helmet())
app.listen(process.env.APP_PORT,()=>{
    console.log(hashPassword("arabasafsaf"))
})
