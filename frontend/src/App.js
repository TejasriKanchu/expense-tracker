import { Wallet } from "lucide-react";

import { useEffect, useState } from "react";
import "./App.css";

import api from "./services/api";

import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const totalAmount = expenses.reduce(
    (total, expense) => total + Number(expense.amount),0
  );

  const filteredExpenses =
  selectedCategory === "All"
    ? expenses
    : expenses.filter(
        (expense) =>
          expense.category === selectedCategory
      );

  // Fetch expenses
  const fetchExpenses = async () => {
    try {
      const response = await api.get("/");

      setExpenses(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">

      <h1>Expense Tracker</h1>

      <AddExpense fetchExpenses={fetchExpenses} />
      <div className="filter-container">
          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
          >

            <option value="All">
              All Categories
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Travel">
              Travel
            </option>

            <option value="Shopping">
              Shopping
            </option>

          </select>
      </div>

      <div className="total-box">

      <Wallet
        size={40}
        color="#7c3aed"
      />

      <div>
        <p>Total Expenses</p>

        <h2>₹{totalAmount}</h2>
      </div>

      </div>
      <ExpenseList
        expenses={filteredExpenses}
        fetchExpenses={fetchExpenses}
      />

    </div>
  );
}

export default App;
