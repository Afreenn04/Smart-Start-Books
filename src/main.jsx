import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import ParentDashboard from "./pages/ParentDashboard.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
