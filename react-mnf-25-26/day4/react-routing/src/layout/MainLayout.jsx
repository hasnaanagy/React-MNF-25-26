import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProtectedRoutes from './ProtectedRoutes'
import Posts from '../pages/Posts'
import SharedLayout from './SharedLayout'
import Users from '../pages/Users'
import UserDetailes from '../components/UserDetailes'

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/login'  element={<Login/>} />

         {/* protected routes */}
         <Route path='/' element={<SharedLayout/>} >
            <Route element={<ProtectedRoutes/>} >
                 <Route index  element={<Home/>} />
                 <Route path='users'  element={<Users/>}/>
                 <Route path='users/:id' element={<UserDetailes/>}/>
                 <Route path='users/:id/posts' element={<Posts/>}/>
                <Route path='posts'  element={<Posts/>}/>
            </Route>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}
