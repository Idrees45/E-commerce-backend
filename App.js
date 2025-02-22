const express= require("express");
const cors= require("cors")
require("dotenv").config()
const app= express()
const bodyParser = require('body-parser');
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
const port = process.env.PORT || 8080;
const connectDB=require("./config/db")
const router=require("./routes/index")
const cookieParser = require('cookie-parser')
app.use(cookieParser());
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use("/api",router)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port no ${port}`)
        console.log("DATA BASE IS CONNECTED")
        })
})

