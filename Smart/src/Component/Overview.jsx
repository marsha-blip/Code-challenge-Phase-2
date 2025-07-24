import React from "react";

export default function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  const daysBetween = (dateString) => {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const target = new Date(dateString);
    const today = new Date();
    const diffMs = Date.UTC(
      target.getFullYear(), target.getMonth(), target.getDate()
    ) - Date.UTC(
      today.getFullYear(), today.getMonth(), today.getDate()
    );
    return Math.round(diffMs / oneDayMs);
  };

  return (
    <div>
      <h1>Overview</h1>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completed}</p>
      <ul>
        {goals.map(g => {
          const daysLeft = daysBetween(g.deadline);
          const warn = daysLeft <= 30 && g.savedAmount < g.targetAmount;
          const overdue = daysLeft < 0 && g.savedAmount < g.targetAmount;
          return (
            <li key={g.id}>
              {g.name}: {daysLeft >= 0 ? `${daysLeft} days left` : "Deadline passed"}
              {warn && " ⚠️"}
              {overdue && " ❗Overdue"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}



