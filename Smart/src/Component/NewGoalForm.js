import React, { useState } from "react";

export default function NewGoalForm({ addGoal }) {
  const [form, setForm] = useState({ name: "", targetAmount: 0, category: "", deadline: "" });

  const submit = e => {
    e.preventDefault();
    addGoal({ ...form, savedAmount: 0, createdAt: new Date().toISOString().slice(0,10) });
    setForm({ name: "", targetAmount: 0, category: "", deadline: "" });
  };

  return (
    <form onSubmit={submit}>
      <h2>Add New Goal</h2>
      <input required placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>
      <input required type="number" placeholder="Target Amount" value={form.targetAmount} onChange={e => setForm({ ...form, targetAmount: +e.target.value })}/>
      <input required placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}/>
      <input required type="date" placeholder="Deadline" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })}/>
      <button type="submit">Add Goal</button>
    </form>
  );
}

