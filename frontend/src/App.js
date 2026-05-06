import AddExpense from "./components/AddExpense"
import ExpenseList from "./components/ExpenseList";
import './App.css';

function App() {
  return (
    <div className="App">
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
