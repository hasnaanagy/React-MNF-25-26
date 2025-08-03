import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


export default  function Navbar(){
    const style={color:'black',textDecoration:'none'} 
return (

    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 80px',backgroundColor:'#e2cb93'}} >
        <Typography>Logo</Typography>
      <Box sx={{display:'flex',gap:8}} >
         <Link style={style} to='/' >Home</Link>
       <Link style={style} to='/products' >Products</Link>
      </Box>
    </Box>
)

}