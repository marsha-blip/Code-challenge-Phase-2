import React from "react";

export default function ProgressBar({ value }) {
  return (
    <div style={{ background: "#e0e0e0", borderRadius: 4, overflow: "hidden" }} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} role="progressbar">
      <div style={{ width: `${value}%`, background: value >= 100 ? "green" : "#1976d2", height: "16px", transition: "width 0.5s" }} />
    </div>
  );
}
