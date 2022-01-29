const express=require("express")
const config=require("./config");
const loaders=require("./loaders")
const helmet = require("helmet");
const http = require('http');
const socketio=require('socket.io')
const {UserRoutes,ChatMessagesRoutes}=require("./routes")




config();
loaders();


const app=express()
const server = http.createServer(app);
const io=socketio(server)


app.use(express.json())
app.use(helmet())


server.listen(process.env.APP_PORT,()=>{
    app.use("/users",UserRoutes)
    app.use("/messages",ChatMessagesRoutes)
    io.on("connection",socket=>{
        socket.on("MESSAGE_EVENT",message=>{
            io.brodcast.emit("MESSAGE_ADDED",message)
        })
    })
    
})
