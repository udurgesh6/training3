import React, { useState } from "react";
import Child from "./Child";
import userContext from "../Context/UserContext";

const Parent = () => {
  const num = 3;
  const name = "Durgesh";
  const [age, setAge] = useState(24);
  const changeAgeBy2 = () => {
    setAge((age) => age + 2);
  };
  const arr = [1, 2, 3, 4];

  return (
    <userContext.Provider value={{ age, changeAgeBy2, num, name }}>
      <div>
        <h1>I am Parent</h1>
        <Child />
      </div>
    </userContext.Provider>
  );
};

export default Parent;
