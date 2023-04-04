import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input type="email" placeholder="Your Email..."/>
        <br />
        <input type="password" name="" id="" placeholder="Your Password"/>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
