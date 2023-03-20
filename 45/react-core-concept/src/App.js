import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External users</h2>
      <p>{users.length}</p>
      {
        users.map((user) => <li>{user.name}</li>)
      }
    </div>
  )
}

export default App;
