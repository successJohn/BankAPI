const express = require("express");
const route = express.Router();
const {register,
    verifyAccount,
     login} = require("../controllers/auth")
const {
    registerValidation,
    loginValidation
} = require("../middlewares/authValidation");

route.post("/register", registerValidation,register);
route.post("/verify-account", verifyAccount);
route.post("/login", loginValidation, login);
router.post('/forgot-password', validateEmail, forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = route;