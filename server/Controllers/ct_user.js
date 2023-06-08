const userModel = require("../Models/md_user");
const crypto = require('crypto');

const VerifyEmailInput = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const VerifyPasswordStrength = () =>{
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  if (!/[!@#$%^&*()-=+]/.test(password)) {
    return false;
  }
  return true;
}


const Login = async(req,res)=>{
    if(!VerifyEmailInput(req.query.email)) return res.json({status:302});

    try {
        const result = await userModel.findOne({email:req.query.email,password:crypto.createHash("sha256").update(req.query.password).digest("hex")}).exec();
        if(!result.email) return res.json({status:301});
        return res.json({status:200,seshID:result._id});
    } catch (error) {
        return res.json({status:301});
    }
}

const Register = async(req,res)=>{
    if(!VerifyEmailInput(req.body.email)) return res.json({status:302});
    if(!VerifyPasswordStrength(req.body.password)) return res.json({status:303});
    try {
        const result = await new userModel({
            email:req.body.email,
            password: crypto.createHash("sha256").update(req.body.password).digest("hex"),
            subscribed:false
        }).save();
        return res.json({status:200,seshID:result._id});
    } catch (error) {
        return res.json({status:301,seshID:result._id});
        
    }


}


module.exports = {
    Register,
    Login
}