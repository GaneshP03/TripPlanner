import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import './index.css'
import TravelForm from '../components/TravelForm.jsx';
import Itinerary from '../components/Itinerary.jsx';
import Query from '../components/Query.jsx';
const router = createBrowserRouter([

  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element:<Login/>
  },

  {
    path:'/register',
    element:<Register />
  },

  {
    path:'/travel',
    element:<TravelForm />
  },

  {
    path:'/it',
    element: <Itinerary />
  },

  {
    path:'/query',
    element:<Query />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
