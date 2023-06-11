const mongoose = require('mongoose');


const ApplicationSchema = new mongoose.Schema({
    company:String,
    jobTitle:String,
    requirements:String,
    reply:String,
    notes:[{
        title:String,
        note:String
    }],
    expiry:String,
    applicationLink:String,
    interviewDate:String,
    reminders:[{
        date:String,
        title:String,
        description:String
    }],
    coverLetter:String,
    archived:Boolean,

})

const Application = mongoose.model('Application', ApplicationSchema);


module.exports = Application;