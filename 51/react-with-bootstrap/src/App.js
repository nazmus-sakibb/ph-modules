import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="text-4xl font-bold">This is header</h1>
      <p>paragraph</p>
      <Pricing/>
      <AssignmentMarks/>
    </div>
  );
}

export default App;
