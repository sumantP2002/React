import { useState } from 'react'
import './App.css'

function App() {
  let counter = 15;
  const increase = ()=>{
    console.log(counter);
    counter += 1;
  }

  const decrease = ()=>{
    console.log(counter);
    counter -= 1;
  }

  return (
    <>
      <h1>Hello This is a simple counter</h1>
      <h2>Current Count : {counter}</h2>
      <button onClick={increase}>Add 1</button>
      <span>   |   </span>
      <button onClick={decrease}>Subtract 1</button>
    </>
  )
}

export default App
