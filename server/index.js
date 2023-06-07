const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/careerhop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const userController = require("./Controllers/ct_user");

/* USER */
app.get("/api/login",userController.Login);


app.post("/api/register",userController.Register);



app.listen(1313,()=>{
    console.log("[G] CareerHop server side is online...")
});