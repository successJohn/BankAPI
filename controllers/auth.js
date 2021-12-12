const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {validationResult} = require("express-validator");
const User = require("../models/user");


exports.register = async function (req,res){
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {firstName, lastName, email, password, confirmPassword} = req.body;

        if(password !== confirmPassword){
        return res.status(400).json({msg: "Passwords do not match"})
        }

        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstName,
            lastName,
            email:email.toLowerCase(),
            password: encryptedPassword
        });
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({msg: "Unable to create    "})
    }
}