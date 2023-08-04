const express = require("express");
const route = express.Router();
const {addData, getData, getDataById, updateData, deleteData} = require("../controller/studentController");

route.post("/addData", addData);
route.get("/getData", getData);
route.get("/getData/:id", getDataById);
route.put("/updateData/:id", updateData);
route.delete("/deleteData/:id", deleteData);

module.exports = route;