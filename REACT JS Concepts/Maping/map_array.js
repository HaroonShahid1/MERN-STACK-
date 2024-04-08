import React from "react";

function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  
  // Using map to create an array of React elements
  const nameListItems = names.map((name, index) => (
    <li key={index}>{name}</li>
  ));
  
  return (
    <div>
      <h1>List of Names</h1>
      <ul>{nameListItems}</ul>
    </div>
  );
}

export default NameList;