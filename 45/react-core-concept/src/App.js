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
        users.map((user) => <UserData user={user}/>)
      }
    </div>
  )
}


function UserData(props) {
  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.user.name}</h3>
      <p>Email: {props.user.email}</p>
    </div>
  )
}

export default App;
