import React from 'react'
import NavbarComponent from '../components/sharedLayout/NavbarComponent'
import Footer from '../components/sharedLayout/Footer'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',minHeight:'100vh'}}>
    <NavbarComponent/>
    <div style={{flex:'1'}}>
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}
