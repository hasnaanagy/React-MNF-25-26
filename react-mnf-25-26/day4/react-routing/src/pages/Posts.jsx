import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Posts() {
  const {id}=useParams()
  const [userPosts,setUserPosts]=useState([])
  const getUserPosts=async()=>{
    try{
     const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
     setUserPosts(res.data)
     console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getUserPosts()
  },[])
  return (
    <>
    <h1>User Posts</h1>
    {userPosts.map((post)=>{
      return <>
      <h3>{post.title}</h3>
       <p>{post.body}</p>

      </>
    })}
    </>
  )
}
