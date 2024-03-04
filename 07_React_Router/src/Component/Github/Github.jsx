import React, {useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    /*
    //wee will use loader for this work so commi
    const [data , setData] = useState(0);
    useEffect(()=>{
        fetch(`https://api.github.com/users/sumant2002`)
        .then((res)=>{
            const data = res.json();
            return data;
        }).then((data) => {
            setData(data)
        })
    }, [])
    */
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
        <img className='text-center' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
   
  )
}

export default Github;

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/sumant2002');
    return res.json();
}