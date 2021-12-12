const {hashPassword}=require("./scripts/utils/security/helper")
const express=require("express")
const config=require("./config");
const app=express()


config();
app.listen(process.env.APP_PORT,()=>{
    console.log(hashPassword("arabasafsaf"))
})
