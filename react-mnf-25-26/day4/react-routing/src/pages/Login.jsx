import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate()
    const [data,setData]=useState({username:'',password:''})
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(data.username==='admin'&&data.password==='admin123'){
            localStorage.setItem('isAuthenticated',true)
        }
        setData({username:'',password:''})
    navigate('/')
    
    }
  return (
    < div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'100vh',gap:16,backgroundColor:'beige'}}>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} >
      <div>
       <div style={{padding:'10px'}}>
         <label>username:</label>
        <input type='text' name='username' value={data.username} onChange={handleInputChange} />
       </div>
       <div style={{padding:'10px'}}>
        <label>password:</label>
        <input type='password' name='password' value={data.password} onChange={handleInputChange} />
       </div>
      </div>
      <button type='submit' >submit</button>
    </form>
        </div>

  )
}
