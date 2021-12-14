const express = require("express");
const route = express.Router();
const {register, login} = require("../controllers/auth")
const {
    registerValidation,
    loginValidation
} = require("../middlewares/authValidation");

route.post("/register", registerValidation,register);
route.post("/login", loginValidation, login);

module.exports = route;