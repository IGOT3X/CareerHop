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
const applicationController = require("./Controllers/ct_application");

/* USER */
app.get("/api/login",userController.Login);
app.post("/api/register",userController.Register);

/* APPLICATIONS */
app.get("/api/get-applications",applicationController.GetApplications);
app.get("/api/get-notes",applicationController.GetNotes);
app.post("/api/archive-application",applicationController.ArchiveApplication);
app.post("/api/add-application",applicationController.AddApplication);
app.post("/api/update-reply",applicationController.UpdateReply);
app.post("/api/add-note",applicationController.AddNote);


app.listen(1313,()=>{
    console.log("[G] CareerHop server side is online...")
});