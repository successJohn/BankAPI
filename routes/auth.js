const express = require("express");
const route = express.Router();
const {register} = require("../controllers/auth")
const {
    registerValidation,
    loginValidation
} = require("../middlewares/authValidation");

route.post("/register", registerValidation,register);
route.post("/login", loginValidation);

module.exports = route;