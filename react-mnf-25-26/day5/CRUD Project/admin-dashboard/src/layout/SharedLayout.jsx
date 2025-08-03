import React from 'react'
import Navbar from '../components/SharedComponents/Navbar'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
