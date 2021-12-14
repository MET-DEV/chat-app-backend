const express=require("express")
const config=require("./config");
const loaders=require("./loaders")
const helmet = require("helmet");
const {UserRoutes,ChatMessagesRoutes}=require("./routes")




config();
loaders();


const app=express()
app.use(express.json())
app.use(helmet())
app.listen(process.env.APP_PORT,()=>{
    app.use("/users",UserRoutes)
    app.use("/messages",ChatMessagesRoutes)
})
