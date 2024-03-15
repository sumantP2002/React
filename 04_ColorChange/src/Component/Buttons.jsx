import {React, useState} from 'react'


function Buttons({}){
    const [color , setColor] = useState("grey")

    return(
        <>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button onClick={()=>{return setColor("Black")}}
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Black
  </button>
  <button onClick={()=>{return setColor("yellow")}}
    type="button"
    className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Yellow
  </button>
  <button onClick={()=>{return setColor("red")}}
    type="button"
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Red
  </button>
  <button
    type="button"
    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Green
  </button>
  <button
    type="button"
    className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Purple
  </button>
  <button
    type="button"
    className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Blue
  </button>
  <button
    type="button"
    className="rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Grey
  </button>
</div>

        </>
    )
}

export default Buttons;