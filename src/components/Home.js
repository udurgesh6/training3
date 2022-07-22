import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Card, Image } from "react-bootstrap";

const Home = () => {
  const [num, setNum] = useState(1);
  const navigate = useNavigate();
  const navigateTo = () => {
    if (num % 2 === 0) {
      navigate("/blogs");
    } else {
      navigate("/about");
    }
  };
  return (
    <div
      style={{
        border: "1px solid red",
        backgroundColor: "blue",
        color: "white",
        height: "90%",
      }}
    >
      <Image
        src="https://i.ytimg.com/vi/7eCTVypgFNo/hq720_live.jpg?sqp=CNTF6pYG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzA49htD1x4zedcwN8fsdUl52a8Q"
        roundedCircle={true}
      />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h2>This is my Home Component</h2>
      <p>{num}</p>
      <button onClick={() => setNum((num) => num + 1)}>Inc</button>
      <Button onClick={navigateTo}>Go to</Button>
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          height: "100px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
