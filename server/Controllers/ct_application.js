const applicationModel = require("../Models/md_application");


const AddApplication = async(req,res)=>{

    try {
        const result = await new applicationModel({
            company:req.body.company,
            jobTitle:req.body.jobTitle,
            requirements:req.body.requirements,
            expiry:req.body.expiry,
            applicationLink:req.body.applicationLink,
            archived:false,
            reply:""
        }).save();
        return res.json({status:200});
    } catch (error) {
        return res.json({status:400});
    }
}

const GetApplications = async(req,res)=>{
    try {
        const result = await applicationModel.find({archived:req.query.archived}).exec();

        return res.json({status:200,applications:result});
    } catch (error) {
        return res.json({status:400});
    }
}

const ArchiveApplication = async(req,res)=>{
    try {
        await applicationModel.updateOne({_id:req.body.jobID},{$set:{archived:true}}).exec();
        return res.json({status:200});
    } catch (error) {
        return res.json({status:400});
    }
}

const UpdateReply = async(req,res)=>{


    if(!"declined, ,interview".includes(req.body.newReply)) return res.json({status:400});

    try {
        await applicationModel.updateOne({_id:req.body.jobID},{$set:{reply:req.body.newReply}}).exec();
        return res.json({status:200});
    } catch (error) {
        return res.json({status:400});
    }
}


const GetNotes = async(req,res)=>{
    try {
        const result = await applicationModel.findOne({_id:req.query.jobID}).select("notes").exec();
        return res.json({status:200,notes:result.notes});
    } catch (error) {
        return res.json({status:400});
    }
}

const AddNote = async(req,res)=>{
    try {
        const newNote = {
            title:req.body.title,
            note:req.body.note
        }
        const result = await applicationModel.updateOne({_id:req.body.jobID},{$push:{notes:newNote}}).exec();

        console.log(result);

        return res.json({status:200});
    } catch (error) {
        return res.json({status:400});
        
    }
}

module.exports = {
    AddApplication,
    GetApplications,
    ArchiveApplication,
    UpdateReply,
    GetNotes,
    AddNote
}