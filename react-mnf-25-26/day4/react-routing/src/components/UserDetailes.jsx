import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserDetailes() {
    const [user,setUser]=useState({})
    const [isLoading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    const {id}=useParams()
    const getUserDetailes=async()=>{
     try{
        setLoading(true)
  const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setLoading(false)
       setUser(res.data)
     }catch(err){
        console.log(err)
     }
    }
    useEffect(()=>{
        getUserDetailes()
    },[])
  return (
    <>
    {isLoading&&<h1>Loading ...</h1>}
    {user&& <>
        <h2>UserDetailes</h2>
        <h3>{user.name}</h3>
        <h3>{user.phone}</h3>
        <p>{user.address?.street}</p>
        <p>{user.address?.city}</p>
        <Link to={`/users/${id}/posts`} ><button>Show My Posts</button></Link>
        </>}
    </>
  )
}
