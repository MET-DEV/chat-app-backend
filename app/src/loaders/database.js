const Mongoose=require("mongoose")

const db=Mongoose.connection;

db.once("open",()=>{
    console.log("Database connection success")
})

const connectDb=async()=>{
    Mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports={
    connectDb
}