import React, { useState, useReducer } from "react";
const initialState = { count: 0, customer_name: "Durgesh", age: 24 };
//Function  ==> initialState, Action
const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + action.payload,
      customer_name: state.customer_name,
      age: state.age,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - action.payload,
      customer_name: state.customer_name,
      age: state.age,
    };
  }
  if (action.type === "changename") {
    return {
      count: state.count,
      customer_name: action.payload,
      age: state.age,
    };
  }
};
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>This is Home Component</p>
      <p>Count - {state.count}</p>
      <p>Name - {state.customer_name}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 3 })}>
        Decrement
      </button>
      <input
        value={state.customer_name}
        type="text"
        onChange={(e) =>
          dispatch({ type: "changename", payload: e.target.value })
        }
      />
    </div>
  );
};

export default Home;
