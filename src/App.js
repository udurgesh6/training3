import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import UseCallbackAndMemo from "./components/UseCallbackAndMemo";
import UseMemo from "./components/UseMemo";

function App() {
  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", overflowY: "scroll" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usecbandmemo" element={<UseCallbackAndMemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
