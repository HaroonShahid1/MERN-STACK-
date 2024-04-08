import React, { useState } from 'react';

function FormWithTable() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  // State variable to hold submitted data
  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form data to the array
    setFormData([...formData, { name, email, age, city }]);
    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
    setCity('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data in a table */}
      <table border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormWithTable;