const mongoose = require("mongoose");

require('dotenv').config();

const {MONGO_URI} = process.env;
const connectDB = mongoose.connect(MONGO_URI, {useNewUrlParser : true})


 module.exports = connectDB;