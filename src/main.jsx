import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Student from "./pages/Student.jsx";
import Parent from "./pages/Parent.jsx";
import Admin from "./pages/Admin.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import CurriculumLevel from "./pages/CurriculumLevel.jsx";
import Lessons from "./pages/Lessons.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/curriculum/:slug" element={<CurriculumLevel />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
