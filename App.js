const express= require("express");
const cors= require("cors")
require("dotenv").config()
const app= express()
const bodyParser = require('body-parser');
// app.use(cors({
//    origin: 'https://dailyloot.vercel.app',
//     credentials:true
// }))
const corsOptions = {
  origin: "https://dailyloot.vercel.app", // ✅ your frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ support all needed methods
  allowedHeaders: ["Content-Type", "Authorization"] // ✅ allow headers you're using
};

// ✅ Apply CORS before everything else
app.use(cors(corsOptions));

// ✅ Handle preflight requests
app.options("*", cors(corsOptions));
app.use(express.json())
const port = process.env.PORT || 5000;
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

