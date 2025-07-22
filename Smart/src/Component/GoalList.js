import React from "react";
import GoalItem from "./GoalItem";

export default function GoalList({ goals, updateGoal, deleteGoal }) {
  return (
    <div>
      {goals.map(g => (
        <GoalItem key={g.id} goal={g} updateGoal={updateGoal} deleteGoal={deleteGoal}/>
      ))}
    </div>
  );
}

