import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './components/Phones.jsx';
import Main from './components/Main.jsx';
import Phone from './components/phone.jsx';
import Mobile from './components/Mobile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () =>fetch('http://localhost:5000/phones')
      },
      {
        path: "/mobile/:id",
        element: <Mobile></Mobile>,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
