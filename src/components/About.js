import React, { useState } from "react";
import axios from "axios";

const About = () => {
  const [employees, setEmployees] = useState([]);
  const getEmpData = () => {
    axios
      .get("http://localhost:8080/employees?age=24&name=Durgesh")
      .then((response) => {
        console.log(response);
        setEmployees(response.data);
      });
  };
  return (
    <div>
      <h2>I am About Component</h2>
      <button onClick={getEmpData}>Get Employee Data</button>
      {employees.map((emp) => (
        <div key={emp.testing_id}>
          <p>Name - {emp.name}</p>
          <p>Age - {emp.age}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
