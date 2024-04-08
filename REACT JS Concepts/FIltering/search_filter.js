import React, {useState} from "react";

function SearchableList() {
    const [items, setItems] = useState([
      'Apple',
      'Banana',
      'Carrot',
      'Broccoli',
      'Grapes',
      'Lettuce'
    ]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {items
            .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    );
  }
  
  export default SearchableList;