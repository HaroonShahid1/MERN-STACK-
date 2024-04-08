import React, {useState} from "react";

function FilterAndMapExample() {
    const [items, setItems] = useState([
      { id: 1, name: 'Apple', category: 'fruit' },
      { id: 2, name: 'Carrot', category: 'vegetable' },
      { id: 3, name: 'Banana', category: 'fruit' },
      { id: 4, name: 'Broccoli', category: 'vegetable' }
    ]);
  
    const [filter, setFilter] = useState('all');
  
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };
  
    return (
      <div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="fruit">Fruits</option>
          <option value="vegetable">Vegetables</option>
        </select>
        <ul>
          {items
            .filter(item => filter === 'all' || item.category === filter)
            .map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    );
  }

export default FilterAndMapExample;