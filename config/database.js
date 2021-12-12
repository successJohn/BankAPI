const mongoose = require("mongoose");

require('dotenv').config();

const {MONGO_URI} = process.env;
const connectDB = mongoose.connect(MONGO_URI, {useNewUrlParser : true})


// const connectDB = () =>{
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser : true,
//         useUnifiedTopology: true,
        
//     })
//     .then(()=>{
//         console.log("Successfully connected to database")
//     })
//     .catch((error) =>{
//         console.log("database connection failed. exiting now...");
//         console.error(error);
//         process.exit(1);
//     });
// };

 module.exports = connectDB;