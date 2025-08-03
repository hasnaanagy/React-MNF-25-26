import React, { useEffect, useState } from 'react'
import { addProduct, getProductById, updateProduct } from '../utils/api'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function ProductForm() {
  const {id}=useParams()
  const location=useLocation()
  const {length}=location.state || 0

const navigate=useNavigate()
const[product,setProduct]=useState({name:'',price:'',quantity:''})
const handleChange=(e)=>{
 const {name,value}=e.target
 setProduct((prev)=>({...prev,[name]:value}))
}

const getProduct=async()=>{
  try{
  const res=await getProductById(id)
    setProduct(res.data)
  }catch(err){
    console.log(err)
  }
}

const handleSubmit=async(e)=>{
try{e.preventDefault()
  if(!id){
const newProduct={...product,id:length+1}
 await addProduct(newProduct)
  }else{
    await updateProduct(id,product)
  }

 navigate('/products')
}catch(err){
  console.log(err)
}

}

useEffect(()=>{
if(id){
  getProduct()
}
},[])
  return (
    console.log(id),
    <form style={{ maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', border: '1px solid #ccc', borderRadius: 8 }} onSubmit={handleSubmit} >
      <h2>{id?'Edit Product':'Add Product'}</h2>
      <label>
        Product Name:
        <input type="text" name="name" value={product.name} onChange={handleChange}  placeholder="Enter product name" required style={{ width: '100%', padding: '0.5rem', marginTop: 4 }} />
      </label>
      <label>
        Price:
        <input type="number" name="price" placeholder="Enter price" value={product.price} onChange={handleChange}  required min="0" step="0.01" style={{ width: '100%', padding: '0.5rem', marginTop: 4 }} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" placeholder="Enter quantity" value={product.quantity} onChange={handleChange}  required min="0" style={{ width: '100%', padding: '0.5rem', marginTop: 4 }} />
      </label>
      <button type="submit" style={{ padding: '0.75rem', background: '#e2cb93', color: 'black', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Submit</button>
    </form>
  );
}
