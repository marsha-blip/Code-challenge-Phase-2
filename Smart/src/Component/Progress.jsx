
import React from "react";

export default function ProgressBar({ value = 0 }) {
  const percent = Math.min(Math.max(value, 0), 100); // ensure 0–100
  const containerStyle = {
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "8px",
    overflow: "hidden",
    height: "20px",
    marginBottom: "8px"
  };
  const fillerStyle = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: "#4caf50",
    transition: "width 0.5s ease-in-out"
  };
  const labelStyle = {
    padding: "0 8px",
    color: "white",
    fontWeight: "bold",
    lineHeight: "20px"
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyle}>{`${percent}%`}</span>
      </div>
    </div>
  );
}

