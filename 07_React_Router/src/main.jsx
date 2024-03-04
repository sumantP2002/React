import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'


//we sometime use loader for optimisation it start fething before useeffect while use is just pointing to the button before clicking


import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Homepage from './Component/HomePage/Homepage.jsx'
import User from './Component/User/User.jsx'
import Github, { githubLoader } from './Component/Github/Github.jsx'


//first way
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Homepage/>
      },
      {
        path: "about",
        element: <About/> 
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Homepage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route
        loader={githubLoader}
      path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
