import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter item name"
      />
      <button >Create</button>
      
            <button>Delete</button>
    </div>
  );
}

export default App;
