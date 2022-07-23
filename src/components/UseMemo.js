import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [name, setName] = useState("");

  const incCounter1 = () => {
    setCounter1((counter1) => counter1 + 1);
  };
  const incCounter2 = () => {
    setCounter2((counter2) => counter2 + 1);
  };

  const data = [];

  const isEvenOld = () => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log("is Even Function called");
    return counter1 % 2 === 0;
  };

  const isEvenCounter1 = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log("is Even Function called");
    return counter1 % 2 === 0;
  }, [counter1]);

  const isEvenCounter2 = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log("is Even Function called");
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
      <h4>This is a demo for useMemo hook</h4>
      <p>Counter1 - {counter1}</p>
      <span>{isEvenCounter1 ? "Even" : "Odd"}</span>
      <button onClick={incCounter1}>Inc Counter 1</button>
      <p>Counter2 - {counter2}</p>
      <span>{isEvenCounter2 ? "Even" : "Odd"}</span>
      <button onClick={incCounter2}>Inc Counter 2</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default UseMemo;
