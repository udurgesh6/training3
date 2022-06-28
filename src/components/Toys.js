import React, { useEffect } from "react";

const Toys = () => {
  useEffect(() => {
    console.log("Rendering Toys Component");
  });

  return <div>This is Toys Component</div>;
};

export default Toys;
