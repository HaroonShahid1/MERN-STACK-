import React from "react";

function NameList (){
  const people = [
    { id: 1, name: "Haroon", age: 22 },
    { id: 2, name: "Ali", age: 21 },
  ];
  
  const list_people = people.map((person) => (
    <li key={person.id}>
      <div>Name: {person.name}</div>
      <div>Age: {person.age}</div>
    </li>
  ));
  
  return (
    <div>
      <ul>{list_people}</ul>
    </div>
  );
}

export default NameList;