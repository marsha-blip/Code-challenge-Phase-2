import React, { useState } from "react";

function DepositForm({ goals, updateGoal }) {
  const [form, setForm] = useState({
    goalId: "",
    amount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "amount" ? +value : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const goal = goals.find(g => g.id === form.goalId);
    if (!goal) return;

    updateGoal(form.goalId, {
      savedAmount: goal.savedAmount + form.amount
    });

    setForm({ goalId: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>

      <select
        name="goalId"
        required
        value={form.goalId}
        onChange={handleChange}
      >
        <option value="">Select Goal</option>
        {goals.map(g => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <input
        name="amount"
        required
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;

