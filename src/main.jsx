import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compoents/Root/Root.jsx';
import Home from './Compoents/Home/Home.jsx';
import Donation from './Compoents/Donation/Donation.jsx';
import Details from './Compoents/Details/Details';
import Statistics from './Compoents/Statistics/Statistics';
import ErrorPage from './Compoents/Error/ErrorPP';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donationdetails/:id',
        element: <Details></Details>,
        loader: () => fetch('/data.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
