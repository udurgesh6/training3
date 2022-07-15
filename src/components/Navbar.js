import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/blogs" style={{ marginRight: "20px" }}>
        Blogs
      </Link>
      <Link to="/about" style={{ marginRight: "20px" }}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
