import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router"
import Project from './pages/Project.jsx'
import { useParams } from 'react-router'
import {Provider} from "react-redux"
import {store} from "./store/store.js"
import socials from './pages/Socials.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/:slug",
        element:<Project/>
      },
      {
        path:"/socials",
        element:<socials/>
      }
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
