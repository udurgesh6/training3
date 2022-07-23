import React, { memo } from "react";

const Count = ({ text, count }) => {
  console.log(`Count ${text} rerendered`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default memo(Count);
