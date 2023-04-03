import './App.css';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const provider = GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    console.log("google coming soon!");
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google Sign In</button>
    </div>
  );
}

export default App;
