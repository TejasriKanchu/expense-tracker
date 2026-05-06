import {useState} from "react"
import axios from "axios"

function AddExpense(){
    const[expense,setExpense] = useState({
        title:"",
        amount:"",
        category:""
    });

    const handleChange=(e) => {
    setExpense({...expense,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api/expenses/add",expense);
            alert("Expense Added Successfully")

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
            <h2 className="add-expense-heading">Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Enter title" value={expense.title} onChange={handleChange}/>
                <input type="number" name="amount" placeholder="Enter amount" value={expense.amount} onChange={handleChange}/>
                <input type="text" name="category" placeholder="Enter category" value={expense.category} onChange={handleChange}/>
                <button type ="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default AddExpense;