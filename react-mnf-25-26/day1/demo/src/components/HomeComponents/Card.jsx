import React from 'react'
import man from '../../assets/man.webp'
export default function Card(props) {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
    <img src={man} style={{width:'500px',height:'400px'}} />
    <h3 style={{color:'white'}} >{props.title}</h3>
    <h6 style={{color:'white'}}>{props.subtitle}</h6>
    </div>
  )
}
