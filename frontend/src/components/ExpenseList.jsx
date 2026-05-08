import {
  Building2,
  Trash2
} from "lucide-react";

import api from "../services/api";

function ExpenseList({ expenses, fetchExpenses }) {

    const deleteExpense = async (id) => {
        try{
            await api.delete(`/${id}`);

            fetchExpenses();

        }catch(error){
            console.log(error);
        }
    };

    return (
        <div>

            <h2>All Expenses</h2>

            {expenses.map((expense) => (
                <div
  key={expense._id}
  className="expense-card"
>

  <div className="expense-left">

    <Building2
      size={42}
      color="#7c3aed"
    />

    <div>

      <h3>{expense.title}</h3>

      <p>Amount: ₹{expense.amount}</p>

      <p>Category: {expense.category}</p>

    </div>

  </div>

  <button
    className="delete-btn"
    onClick={() => deleteExpense(expense._id)}
  >
    <Trash2 size={15} />
    Delete
  </button>

</div>
            ))}

        </div>
    );
}

export default ExpenseList;