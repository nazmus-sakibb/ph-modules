import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

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

const handlePasswordBlur = e => {
  console.log(e.target.value);
}


function App() {
  return (
    <div>
      <RegisterReactBootstrap/>



    </div>
  );
}

export default App;
