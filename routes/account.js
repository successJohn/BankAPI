const express = require("express");
const route = express.Router();
const {authentication} = require("../middlewares/authentication");
const {createAccount, deposit,withdrawal, transfer,getBalance,getHistory} = require("../controllers/account");


const {
    createAccountValidation,
    depositValidation,
    withdrawalValidation,
    transferValidation,

} = require("../middlewares/accountValidation");


route.post('/createaccount', [authentication,createAccountValidation], createAccount);
route.post('/:accountId/deposit', [authentication,depositValidation], deposit);
route.post('/:accountId/withdraw', [authentication,withdrawalValidation], withdrawal);
route.post('/:accountId/transfer', [authentication, transferValidation], transfer);
route.get('/:accountId/balance', authentication, getBalance);
route.get('/:accountId/history', authentication, getHistory);
module.exports = route;

