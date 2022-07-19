import React, { useContext } from "react";
import SubChild from "./SubChild";
import userContext from "../Context/UserContext";

const Child = () => {
  const { num, name, age, changeAgeBy2 } = useContext(userContext);
  return (
    <div>
      <h3>I am Child</h3>
      <p>Value of num = {num}</p>
      <p>Value of name = {name}</p>
      <SubChild age={age} changeAgeBy2={changeAgeBy2} />
    </div>
  );
};

export default Child;
