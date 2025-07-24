import React from "react";
import GoalItem from "./GoalItem.jsx";

function GoalList({ goals, updateGoal, deleteGoal }) {
  return (
    <div>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          updateGoal={updateGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
