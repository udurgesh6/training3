import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallbackAndMemo = () => {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(25000);

  const incAge = useCallback(() => {
    setAge((age) => age + 1);
  }, []);

  const incSalary = useCallback(() => {
    setSalary((salary) => salary + 1);
  }, []);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button text="Age" handleClick={incAge} />
      <Count text="Salary" count={salary} />
      <Button text="Salary" handleClick={incSalary} />
    </div>
  );
};

export default UseCallbackAndMemo;
