import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    
  }, []) 
  return (
    <div>
      <h2>External users</h2>
    </div>
  )
}

export default App;
