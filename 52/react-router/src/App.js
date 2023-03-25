import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>Default Page</div>},
    {path: '/home', element: <div>Home</div>},
    {path: '/about', element: <div>About</div>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
