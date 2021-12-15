const nodemailer = require('nodemailer');
require("dotenv").config();
const AccountNumbers = require("../models/accountNumber");
const {USERNAME, PASSWORD} = process.env;

exports.sendMail = async function (recipients, subject, text){
    let transporter = nodemailer.createTransport({
        service :"gmail",
        auth: {
            user: USERNAME,
            pass: PASSWORD
        }
    });

    let mailOptions = {
        from:'"Success Bank" <successjohn311@gmail.com> ',
        to: recipients,
        subject: subject, 
        text: text,
        html: `<b>${text}</b>`
    }



    transporter.sendMail(mailOptions, (err, data)=>{
        if(err){
            console.log("error occurs", err)
        }else{
            console.log("email sent")
        }
    })

};


exports.generateAccountNumber = async function () {
    let accountNumber = '22';
    for (let i = 0; i < 8; i++) {
        accountNumber += Math.floor(Math.random() * 10);
    }

    const accountNumberFound = await AccountNumbers.findOne({ number: Number(accountNumber) });
    while (accountNumberFound) {
        generateAccountNumber();
    }
    const newAccountNumber = new AccountNumbers({ number: Number(accountNumber) });
    await newAccountNumber.save();
    return Number(accountNumber);
};