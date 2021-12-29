const express = require("express");
const route = express.Router();
const {
    register,
    verifyAccount,
    login,
    forgotPassword,
    resetPassword
} = require("../controllers/auth")
const {
    registerValidation,
    loginValidation,
    validateEmail,
    verifyEmailValidation
} = require("../middlewares/authValidation");

route.post("/register", registerValidation,register);
route.post("/verify-account",verifyEmailValidation, verifyAccount);
route.post("/login", loginValidation, login);
route.post('/forgot-password', validateEmail, forgotPassword);
route.post('/reset-password', resetPassword);

module.exports = route;