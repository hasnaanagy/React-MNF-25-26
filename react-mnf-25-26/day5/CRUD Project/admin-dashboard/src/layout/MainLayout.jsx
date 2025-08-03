import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductForm from '../pages/ProductForm'
import ProductDetailes from '../pages/ProductDetailes'

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<SharedLayout/>} >
              <Route index  element={<Home/>} />
              <Route path='/products'  element={<Products/>} />
              <Route path='/products/add'   element={<ProductForm/>} />
              <Route path='/products/:id/edit'   element={<ProductForm/>} />
              <Route path='/products/:id'   element={<ProductDetailes/>} />

          </Route>
      </Routes>
    </BrowserRouter>
  )
}
