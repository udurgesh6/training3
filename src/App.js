import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";

function App() {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/parent" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
