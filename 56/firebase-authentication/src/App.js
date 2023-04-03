import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google Sign In</button>
    </div>
  );
}

export default App;
