import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false);
  const [character , setCharacter] = useState(false);
  const [password , setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  //here we are talking about optimization
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed == true){
      string += "0123456789";
    }
    if(character == true){
      string += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    }

    for (let i = 1; i < length; i++) {
      let index = Math.floor(Math.random() * string.length + 1);
      let char = string[index];
      pass += char;
    }
    setPassword(pass);
  } , [numAllowed , character , length , setPassword]);

  //copy password to clipboard
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(()=>{
    passwordGenerator()
  } , [numAllowed , character , length , passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div>
          <div>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label >Length : {length}</label>


            
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=>{
                setNumAllowed((prev) => !prev);
              }}
              
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={character}
              id='characterInput'
              onChange={()=>{
                setCharacter((prev) => !prev);
              }}
              
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
