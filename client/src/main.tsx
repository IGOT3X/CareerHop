import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path:"/login",
    element:<Auth/>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
