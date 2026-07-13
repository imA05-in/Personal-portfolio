import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      //configure for auto project(multiple pages) routing
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
