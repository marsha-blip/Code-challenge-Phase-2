import { useState, useEffect } from "react";
import Overview from "./Component/Overview.jsx";
import NewGoalForm from "./Component/NewGoalForm.jsx";
import DepositForm from "./Component/DepositForm.jsx";
import GoalList from "./Component/GoalList.jsx";

const API = "http://localhost:3000/goals"; 

export default function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals 
  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
      const data = await res.json();
      setGoals(data);
    } catch (e) {
      console.error("Failed to fetch goals:", e);
    }
  };

  // Create a new goal
  const addGoal = async (goal) => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goal),
      });
      if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
      fetchGoals();
    } catch (e) {
      console.error("Failed to add goal:", e);
    }
  };

  // Update an existing goal
  const updateGoal = async (id, data) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
      fetchGoals();
    } catch (e) {
      console.error("Failed to update goal:", e);
    }
  };

  // Delete a goal
  const deleteGoal = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
      fetchGoals();
    } catch (e) {
      console.error("Failed to delete goal:", e);
    }
  };

  return (
    <div className="App">
      <Overview goals={goals} />

      <section className="forms">
        <NewGoalForm addGoal={addGoal} />
        <DepositForm goals={goals} updateGoal={updateGoal} />
      </section>

      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
    </div>
  );
}


