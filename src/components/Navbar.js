import React from "react";
// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blogs" style={{ marginRight: "20px" }}>
          Blogs
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" style={{ marginRight: "20px" }}>
          About
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/parent" style={{ marginRight: "20px" }}>
          Parent
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/usememo" style={{ marginRight: "20px" }}>
          UseMemo
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/usecbandmemo" style={{ marginRight: "20px" }}>
          UseCBAndMemo
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
