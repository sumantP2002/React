import React from 'react'
import { useParams } from 'react-router-dom';

//i get the access of userId here in this component
function User() {
    const {userId} = useParams(); 
  return (
    <div>User: {userId}</div>
  )
}

export default User;