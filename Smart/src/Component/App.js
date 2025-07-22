import React, { useState, useEffect } from "react";
import GoalList from "Smart/src/Component/GoalList.js";
import NewGoalForm from "Smart/src/Component/NewGoalForm.js";
import DepositForm from "Smart/src/Component/DepositForm.js";
import Overview from "Smart/src/Component/Overview.js";
import axios from "axios";

const API = "http://localhost:3000/goals";

function App() {
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    axios.get(API).then(res => setGoals(res.data));
  }, []);

  const refresh = () => axios.get(API).then(res => setGoals(res.data));

  const addGoal = goal => axios.post(API, goal).then(refresh);
  const updateGoal = (id, updates) => axios.patch(`${API}/${id}`, updates).then(refresh);
  const deleteGoal = id => axios.delete(`${API}/${id}`).then(refresh);

  return (
    <div>
      <Overview goals={goals}/>
      <NewGoalForm addGoal={addGoal}/>
      <DepositForm goals={goals} updateGoal={updateGoal}/>
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal}/>
    </div>
  );
}

export default App;

