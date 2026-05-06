const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

//Add Expense
router.post("/add", async (req,res) => {
    try{
        const newExpense = new Expense(req.body);
        await newExpense.save();
        res.json(newExpense);
    }catch(err){
        res.status(500).json({Error : err.message});
    }
});

//Get All Expenses
router.get("/",async (req,res) => {
    try{
        const expenses = await Expense.find();
        res.json(expenses);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

//Delete Expense
router.delete("/:id", async ( req,res) => {
    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message : "Expense deleted successfully"})
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

module.exports = router;
