import { useState } from 'react'
import './App.css'

function App() {
  const [Counter , setCounter] = useState(15)

  
  const increase = ()=>{
    if(Counter < 20){
      //all this combined only increase by 1 because of bunch update
      // setCounter(Counter + 1);
      // setCounter(Counter + 1);
      // setCounter(Counter + 1);
      // setCounter(Counter + 1);

      //so how to do this
      setCounter((prevCount)=>{return prevCount+1})
      setCounter((prevCount)=>{return prevCount+1})
      setCounter((prevCount)=>{return prevCount+1})
      setCounter((prevCount)=>{return prevCount+1})


    }
  }

  const decrease = ()=>{
    if(Counter > 0){
      setCounter(Counter - 1);
    }
    
  }

  return (
    <>
      <h1>Hello This is a simple counter</h1>
      <h2>Current Count : {Counter}</h2>
      <button onClick={increase}>Add 1</button>
      <span>   |   </span>
      <button onClick={decrease}>Subtract 1</button>
    </>
  )
}

export default App
