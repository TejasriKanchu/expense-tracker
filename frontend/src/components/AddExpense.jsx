import {
  FileText,
  IndianRupee,
  Tag,
  Plus
} from "lucide-react";

import {useState} from "react"
import axios from "axios"
import api from "../services/api";

function AddExpense({ fetchExpenses }){
    const[expense,setExpense] = useState({
        title:"",
        amount:"",
        category:""
    });

    const handleChange=(e) => {
    setExpense({...expense, [e.target.name ] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await api.post("/add",expense);
            alert("Expense Added Successfully")
            fetchExpenses();

            setExpense({
                title:"",
                amount:"",
                category:""
            });
        }catch(error){
            console.log(error);
             alert(error.message)
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>

  <div className="input-box">
    <FileText color="#7c3aed" />

    <input
      type="text"
      name="title"
      placeholder="Enter title"
      value={expense.title}
      onChange={handleChange}
    />
  </div>

  <div className="input-box">
    <IndianRupee color="#7c3aed" />

    <input
      type="number"
      name="amount"
      placeholder="Enter amount"
      value={expense.amount}
      onChange={handleChange}
    />
  </div>

  <div className="input-box">
    <Tag color="#7c3aed" />

    <input
      type="text"
      name="category"
      placeholder="Enter category"
      value={expense.category}
      onChange={handleChange}
    />
  </div>

  <button className="add-btn" type="submit">
    Add Expense
  </button>

</form>
        </div>
    )
}

export default AddExpense;