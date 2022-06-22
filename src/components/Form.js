import React, { useState } from "react";
import "../css/Form.css";

const Form = () => {
  const [name, setName] = useState("Pyanshi");
  const sendMe = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <p>This is my name {name}</p>
      <form className="form_training" onSubmit={(e) => sendMe(e)}>
        <label>Name</label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input placeholder="Age" type="number" />
        <label>Email</label>
        <input placeholder="Email" type="email" />
        <label>Password</label>
        <input placeholder="Password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
