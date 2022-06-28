// Conditional Rendering
import React, { useState } from "react";
import Books from "./components/Books";
import Toys from "./components/Toys";

const App = () => {
  const [currentlyShowing, setCurrentlyShowing] = useState("B");
  const [num, setNum] = useState(0);
  const onNumInc = () => {
    setNum((num) => num + 1);
  };
  const onSwitch = () => {
    if (currentlyShowing === "B") {
      setCurrentlyShowing("T");
    } else {
      setCurrentlyShowing("B");
    }
  };
  return (
    <div>
      <p>This is my App Component</p>
      <p>Num = {num}</p>
      <button onClick={onSwitch}>Switch</button>
      <button onClick={onNumInc}>Increment</button>
      {/* {currentlyShowing === "B" ? <Books /> : <Toys />} */}
      {currentlyShowing === "B" && <Books />}
      {currentlyShowing === "T" && <Toys />}
    </div>
  );
};

export default App;
