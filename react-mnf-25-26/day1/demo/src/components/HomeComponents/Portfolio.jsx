import React from 'react'
import Card from './Card'

export default function Portfolio() {
  return (
    <div style={{padding:40,backgroundColor:'#222222',display:'flex',flexWrap:'wrap',gap:16,justifyContent:'center',}}>
      <Card title='hasnaa'  subtitle='23'/>
      <Card title='sara'  subtitle='20'/>
      <Card  title='asmaa'  subtitle='30'/>
      <Card title='hasnaa'  subtitle='23'/>
      <Card title='hasnaa'  subtitle='23'/>
      <Card title='hasnaa'  subtitle='23'/>
    </div>
  )
}
