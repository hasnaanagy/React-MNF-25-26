import React, { useEffect } from 'react'

export default function Login({logout}) {
    useEffect(()=>{
     console.log('form login useEffect')
     return()=>{
        console.log('clean up')
     }
    },[])
  return (
    <>
        <h1>Welcome to login</h1>
        <button onClick={logout}>logout</button>
    </>
  )
}

