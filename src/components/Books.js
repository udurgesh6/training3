import React, { useState, useEffect } from "react";

const Books = () => {
  const [book, setBook] = useState("Book1");
  const onBookChange = () => {
    if (book === "Book1") {
      setBook("Book2");
    } else {
      setBook("Book1");
    }
  };
  useEffect(() => {
    console.log("Hey Books are rendering");
    return () => {
      console.log("Books unmounted");
    };
  });

  return (
    <div style={{ border: "1px solid red" }}>
      <p>This is Books Component</p>
      <p>Current Book - {book}</p>
      <button onClick={onBookChange}>Change Book</button>
    </div>
  );
};

export default Books;
