import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(1);
  let num1 = 1;
  const incrementNormalVariable = () => {
    num1 = num1 + 1;
    console.log(num1);
  };
  const incrementStateVariable = () => {
    setNum((num) => num + 1);
    console.log(num);
  };
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const onNameAdd = () => {
    setNames((names) => [...names, name]);
  };

  return (
    <div>
      <p>Normal variable - {num1}</p>
      <p>State Variable - {num}</p>
      <button onClick={incrementNormalVariable}>
        Increment Normal Variable
      </button>
      <button onClick={incrementStateVariable}>Increment State Variable</button>
      <input
        value={name}
        onChange={(pyanshi) => setName(pyanshi.target.value)}
      />
      <button onClick={onNameAdd}>Add Name</button>
      {names.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>
  );
};

export default App;
