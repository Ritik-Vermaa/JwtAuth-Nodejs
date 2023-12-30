const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./Db/index");
const cors = require("cors");
const app = express();
const routes = require('./routes/authRoute')


dotenv.config()

//mideleware
app.use(cors()) // cross orgine 
app.use(express.json()) 

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 5000 , () =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    }) 
})
.catch((err) =>{
    console.log("MongoDb connection failed !!!" , err);
});

app.use("/api" , routes)