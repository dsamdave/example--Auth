const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


const uri = process.env.MONGODB_URL

const connectDB = ()=>{

    mongoose.connect(uri)
        .then(() => console.log("MongoDB Connected..."))
    
} 

module.exports = connectDB