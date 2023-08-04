const mongoose = require("mongoose");
require('dotenv').config();

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}