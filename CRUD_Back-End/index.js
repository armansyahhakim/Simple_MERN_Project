const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors')

// Database
const database = require("./config/database")
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Route
const studentRoute = require("./routes/studentRoute");
app.use("/mahasiswa", studentRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});