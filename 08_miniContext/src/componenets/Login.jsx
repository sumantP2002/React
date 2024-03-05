import React , {useState , useContext} from 'react'
import userContext from '../Context/UserContext'


function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {user , setUser} = useContext(userContext);

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        setUser({username , password});
   } 
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder='UserName'/>
        <input type='text' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login;