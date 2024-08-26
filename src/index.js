import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import Admin from './page/Admin';
import Register from './page/Register';
import LoginPage from './page/LoginPage';
import Users from './page/Users';


const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/admin/:userID",
      element:<Admin/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/users",
      element:<Users/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);

