import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);

const handleRegister = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password);
}


const handleEmailBlur = e => {
  console.log(e.target.value);
}

const handlePasswordChange = e => {
  console.log(e.target.value);
}


function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Your Email..."/>
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Your Password"/>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
