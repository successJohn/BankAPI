const express = require("express");
const route = express.Router();
const {authentication} = require("../middlewares/authentication");
const {createAccount, deposit} = require("../controllers/account");


const {
    createAccountValidation,
    depositValidation
} = require("../middlewares/accountValidation");


route.post('/createaccount', [authentication,createAccountValidation], createAccount);
route.post('/:accountId/deposit', [authentication,depositValidation], deposit);
module.exports = route;

