import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>This is my Home Component</h2>
      <p>{num}</p>
      <button onClick={() => setNum((num) => num + 1)}>Inc</button>
      <button onClick={navigateTo}>Go to</button>
    </div>
  );
};

export default Home;
