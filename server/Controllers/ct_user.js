const userModel = require("../Models/md_user");
const crypto = require('crypto');


const Login = async(req,res)=>{

    try {
        const result = await userModel.findOne({email:req.query.email,password:crypto.createHash("sha256").update(req.query.password).digest("hex")}).exec();
        if(!result.email) return res.json({status:301});
        return res.json({status:200,seshID:result._id});
    } catch (error) {
        return res.json({status:301});
    }
}

const Register = async(req,res)=>{

    try {
        const result = await new userModel({
            email:req.body.email,
            password: crypto.createHash("sha256").update(req.body.password).digest("hex")
        }).save();
        return res.json({status:200,seshID:result._id});
    } catch (error) {
        return res.json({status:300,seshID:result._id});
        
    }


}


module.exports = {
    Register,
    Login
}