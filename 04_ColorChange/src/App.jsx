import { useState } from 'react'
import Buttons from './Component/Buttons'
import './App.css'

function App() {
  const [color , setColor] = useState("grey")

  function changeColor(e){
    setColor(e.color);
  }
   
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: {color}}}>
        <h1>Click Button</h1>
        <div>
         <Buttons onChangeColor = {changeColor}/>
        </div>
      </div>
      
      

    </>
  )
}

export default App
