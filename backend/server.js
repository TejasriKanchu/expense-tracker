const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();


//Middleware Functions
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/expenses", expenseRoutes);

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

//Test route
app.get('/',(req,res) => {
    res.send("Backend is running");
})

app.get("/test", (req, res) => {
  res.send("Test working");
});

const PORT = process.env.PORT ||5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
