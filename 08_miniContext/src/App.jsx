import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>  
    </UserContextProvider>
  )
}

export default App
