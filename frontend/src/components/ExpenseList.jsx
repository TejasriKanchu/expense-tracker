import {useEffect,useState} from 'react'
import axios from 'axios';

function ExpenseList(){
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async() => {
        try{
            const response = await axios.get("http://localhost:5000/api/expenses");
            setExpenses(response.data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    },[]);

    return (
        <div>
            <h2>All Expenses</h2>
            {expenses.map((expense) => (
                <div key={expense._id} className="expense-card">
                    <h3>{expense.title}</h3>
                    <p>Amount: ${expense.amount}</p>
                    <p>Category: {expense.category}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default ExpenseList;
