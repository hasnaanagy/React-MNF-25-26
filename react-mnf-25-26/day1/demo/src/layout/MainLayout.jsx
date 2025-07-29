import React, { Component } from 'react'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  )
}
