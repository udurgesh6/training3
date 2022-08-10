import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [testing_id, setTesting_id] = useState(0);
  const [age, setAge] = useState(19);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  }, []);

  const addPerson = () => {
    axios
      .post("http://localhost:8080/employees/add", {
        testing_id: testing_id,
        name: name,
        age: age,
      })
      .then((response) => {
        console.log(response.data);
        setEmployees((employees) => [
          ...employees,
          {
            testing_id: testing_id,
            name: name,
            age: age,
          },
        ]);
      });
  };

  return (
    <div>
      {employees.map((emp, empid) => (
        <p key={empid}>{emp.name}</p>
      ))}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        value={testing_id}
        onChange={(e) => setTesting_id(e.target.value)}
      />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={addPerson}>Add this person</button>
    </div>
  );
};

export default Home;
