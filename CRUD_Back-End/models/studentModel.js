const mongoose = require("mongoose");

const studentSchema =  new mongoose.Schema({
    npm: {
        type: Number,
    },
    name: {
        type:String,
    },
    major: {
        type: String,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Students", studentSchema);