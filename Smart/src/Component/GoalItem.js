import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function GoalItem({ goal, updateGoal, deleteGoal }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: goal.name, targetAmount: goal.targetAmount, category: goal.category, deadline: goal.deadline });

  const save = () => {
    updateGoal(goal.id, form);
    setEditing(false);
  };

  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      {editing ? (
        <>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
          <input type="number" value={form.targetAmount} onChange={e => setForm({...form, targetAmount: +e.target.value})}/>
          <input value={form.category} onChange={e => setForm({...form, category: e.target.value})}/>
          <input type="date" value={form.deadline} onChange={e => setForm({...form, deadline: e.target.value})}/>
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>{goal.category} • Target: ${goal.targetAmount}</p>
          <ProgressBar value={percent}/>
          <p>${goal.savedAmount} saved ({percent.toFixed(1)}%)</p>
          <p>Deadline: {goal.deadline}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteGoal(goal.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
