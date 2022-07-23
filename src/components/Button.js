import React, { memo } from "react";

const Button = ({ handleClick, text }) => {
  console.log(`Button ${text} rerendered`);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default memo(Button);
