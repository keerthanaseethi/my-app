import React from "react";

export function Progress({ percentage }) {
  return (
    <div>
      <p>Progress: {percentage}%</p>
      <div style={{ width: "100%", background: "#eee" }}>
        <div
          style={{ width: `${percentage}%`, background: "green", height: "8px" }}
        ></div>
      </div>
    </div>
  );
}

export function Course({ name, progress }) {
  return (
    <div className="course">
      <h3>{name}</h3>
      <Progress percentage={progress} />
    </div>
  );
}

export default function Dashboard({ student, courses }) {
  return (
    <div>
      <h2>Welcome, {student}</h2>
      {courses.map((c, i) => (
        <Course key={i} name={c.name} progress={c.progress} />
      ))}
    </div>
  );
}
