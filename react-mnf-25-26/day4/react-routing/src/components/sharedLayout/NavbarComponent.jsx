import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <ul style={{display:'flex',justifyContent:'center',gap:10,padding:'20px',backgroundColor:'goldenrod',margin:0}}>
        <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to='/users' style={{textDecoration:'none',color:'white'}}>Users</Link>
        <Link to='/posts' style={{textDecoration:'none',color:'white'}}>Posts</Link>
    </ul>
  )
}
