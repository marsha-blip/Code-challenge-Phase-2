// src/App.jsx
import { useState, useEffect } from 'react';
import Overview from "./Component/Overview.js";
import NewGoalForm from "./Component/NewGoalForm.js";
import DepositForm from "./Component/DepositForm.js";

const API = 'http://localhost:3000/goals';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals on load
  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await axios.get(API);
      setGoals(res.data);
    } catch (e) {
      console.error("Failed to fetch goals:", e);
    }
  };

  // Create a new goal
  const addGoal = async (goal) => {
    try {
      await axios.post(API, goal);
      fetchGoals();
    } catch (e) {
      console.error("Failed to add goal:", e);
    }
  };

  // Update an existing goal
  const updateGoal = async (id, data) => {
    try {
      await axios.patch(`${API}/${id}`, data);
      fetchGoals();
    } catch (e) {
      console.error("Failed to update goal:", e);
    }
  };

  // Delete a goal
  const deleteGoal = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
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

export default App;


