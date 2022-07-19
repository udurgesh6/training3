import React, { useContext } from "react";
import userContext from "../Context/UserContext";
const SubChild = () => {
  const data = useContext(userContext);
  return (
    <div>
      <h4>I am a SubChild</h4>
      <p>Age = {data.age}</p>
      <button onClick={data.changeAgeBy2}>changeAgeBy2</button>
    </div>
  );
};

export default SubChild;
