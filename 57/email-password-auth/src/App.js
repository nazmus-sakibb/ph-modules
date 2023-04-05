import './App.css';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from './layout/Main';
import LoginBootstrap from './components/LoginBootstrap';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap />
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap />
      },
      {
        path: '/login',
        element: <LoginBootstrap />
      },
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
