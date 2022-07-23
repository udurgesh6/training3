import React, { memo } from "react";

const Title = () => {
  console.log("Title rerendered");
  return <div>Hi I am a title component for usecallbackandmemo component</div>;
};

export default memo(Title);
