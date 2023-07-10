
const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./db")
const routes = require("./routes")
dotenv.config()

const app = express()

app.use(express.json())

app.use("/api", routes)

const PORT = process.env.PORT  || 8000

 connectDB() 

app.listen(PORT, ()=>{
    console.log(`Server listening ${PORT}`);
})