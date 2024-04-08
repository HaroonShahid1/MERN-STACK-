import React from "react";

const NameList = () => {
  const people = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    // Add more people as needed
  ];

  const renderTableHeader = function() {
    const headers = Object.keys(people[0]);
    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

const renderTableRows = function() {
  return people.map((person) => (
    <tr key={person.id}>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.age}</td>
    </tr>
  ));
};


  return (
    <div>
      <h1>List of People</h1>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default NameList;