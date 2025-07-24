import React, { useState } from "react";
import ProgressBar from "./Progress.jsx";

function GoalItem({ goal, updateGoal, deleteGoal }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...goal });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "targetAmount" ? +value : value }));
  };

  const save = () => {
    updateGoal(goal.id, form);
    setEditing(false);
  };

  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100).toFixed(1);

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      {editing ? (
        <>
          {["name", "targetAmount", "category", "deadline"].map(field => (
            <input
              key={field}
              name={field}
              type={field === "targetAmount" ? "number" : field === "deadline" ? "date" : "text"}
              value={form[field]}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
          ))}
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>{goal.category} • Target: ${goal.targetAmount}</p>
          <ProgressBar value={+percent} />
          <p>${goal.savedAmount} saved ({percent}%)</p>
          <p>Deadline: {goal.deadline}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteGoal(goal.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default GoalItem;
