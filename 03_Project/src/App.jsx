import { useState } from 'react'
import Card from './Component/Card'
import './App.css'

function App() {
  let myObj = {
    username: "sumant",
    age: 24
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>TailWind Test</h1>
      <Card username = 'Sumant' btnText = 'watch Movie'/>
      <Card username = 'Sana Pandey' btnText = 'Review Movie'/>
      <Card username = 'Niddhi Pandey' />
      <Card username = 'Ranjeet Pandey' btnText = 'watch Movie'/>
    </>
  )
}

export default App
