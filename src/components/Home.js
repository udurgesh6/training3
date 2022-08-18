import React, { useRef } from "react";

const Home = () => {
  const inputRef = useRef();
  const runFunc = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <p>This is Home Component</p>
      <input ref={inputRef} />
      <button onClick={runFunc}>Focus</button>
    </div>
  );
};

export default Home;
