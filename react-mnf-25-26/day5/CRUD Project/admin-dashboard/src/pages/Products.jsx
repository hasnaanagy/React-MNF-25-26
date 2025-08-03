import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getProducts } from '../utils/api';
export default function Products() {
const [products,setProducts]=useState([])
  const navigate=useNavigate()
  const getAllProducts=async()=>{
    try{
    const res=await getProducts()
    setProducts(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllProducts()
  },[])



  return (
    <Box sx={{m:2}} >
       <Button sx={{mb:2,bgcolor:'#e2cb93',color:'black'}} onClick={()=>navigate('/products/add',{state:{length:products.length}})} >Add Product</Button>
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={() => navigate(`/products/${product.id}`)}><VisibilityIcon /></Button>
                    <Button size="small" onClick={() => navigate(`/products/${product.id}/edit`)}><EditIcon /></Button>
                    <Button size="small" color="error" onClick={() => alert(`Delete`)}><DeleteIcon /></Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
