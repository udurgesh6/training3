import React, { useState } from "react";

const App = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const addPerson = () => {
    let filteredElement = people.filter((ele) => ele.person_id === id);
    if (filteredElement.length > 0) {
      alert("Person with this ID already exists!");
    } else {
      let obj = {
        person_name: name,
        person_id: id,
      };
      setPeople((people) => [...people, obj]);
      setName("");
      setId(0);
    }
  };
  const removePerson = (pers_id) => {
    let tempPeople = people.filter((ele) => ele.person_id !== pers_id);
    setPeople(tempPeople);
  };
  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Id"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={addPerson}>Add Person</button>
      <p>Employees</p>
      {people.map((ele, eleIndex) => (
        <div key={eleIndex}>
          <p>Name = {ele.person_name}</p>
          <p>Id - {ele.person_id}</p>
          <button onClick={() => removePerson(ele.person_id)}>
            Remove {ele.person_name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
