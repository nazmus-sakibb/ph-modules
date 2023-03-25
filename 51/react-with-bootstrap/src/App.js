import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <Button variant='danger'>Button</Button>
      <Spinner animation="border" variant="success" />
      <CardGrid/>
    </div>
  );
}

export default App;
