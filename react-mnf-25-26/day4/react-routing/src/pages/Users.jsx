import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Users() {
   const [users,setUsers]=useState([])
    const getUsers=async()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setUsers(response.data)
    }

    useEffect(()=>{
        getUsers()
    },[])

  return (
    <>
    <h1>Users</h1>
 <table border={1} >
     <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
     <th><applet></applet>ctions</th>
     </tr>

{users.map((user)=>{
    return <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><Link style={{color:'black'}} to={`/users/${user.id}`} ><FaEye /></Link></td>

    </tr>
})}
</table>

    </>

  )
}
