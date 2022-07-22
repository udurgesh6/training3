import React from "react";
// import { Nav.Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Navbar = () => {
  return (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/blogs" style={{ marginRight: "20px" }}>
          Blogs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/about" style={{ marginRight: "20px" }}>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/parent" style={{ marginRight: "20px" }}>
          Parent
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
