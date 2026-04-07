const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

//Test route
app.get('/',(req,res) => {
    res.send("Backend is running");
})

const port = process.env.port ||5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
