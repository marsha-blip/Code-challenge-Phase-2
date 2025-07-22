import React, { useState } from "react";

export default function DepositForm({ goals, updateGoal }) {
  const [form, setForm] = useState({ goalId: "", amount: 0 });

  const submit = e => {
    e.preventDefault();
    const goal = goals.find(g => g.id === form.goalId);
    if (!goal) return;
    const newSaved = goal.savedAmount + form.amount;
    updateGoal(form.goalId, { savedAmount: newSaved });
    setForm({ goalId: "", amount: 0 });
  };

  return (
    <form onSubmit={submit}>
      <h2>Make a Deposit</h2>
      <select required value={form.goalId} onChange={e => setForm({ ...form, goalId: e.target.value })}>
        <option value="">Select Goal</option>
        {goals.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
      <input required type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: +e.target.value })}/>
      <button type="submit">Deposit</button>
    </form>
  );
}
