import React from "react";
import Dashboard from "./Dashboard";
import ProductCard from "./ProductCard";
import JobForm from "./JobForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* --- Dashboard Section --- */}
      <h2>📘 Student Dashboard</h2>
      <Dashboard
        student="Rahul Sharma"
        courses={[
          { name: "React Fundamentals", progress: 85 },
          { name: "Node.js Basics", progress: 60 },
        ]}
      />

      <hr />

      {/* --- Product Cards Section --- */}
      <h2>🛒 E-Commerce Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <ProductCard name="Smartphone" price={20000} discount={15} />
        <ProductCard name="Headphones" price={3000} discount={0} />
      </div>

      <hr />

      {/* --- Job Form Section --- */}
      <h2>💼 Apply for a Job</h2>
      <JobForm />
    </div>
  );
}

export default App;
