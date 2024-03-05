import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'



function Profile() {
    const {user} = useContext(UserContext)

    if(!user)   return <div>Please login my friend</div>
    
    return <div>Welcome</div>
}

export default Profile