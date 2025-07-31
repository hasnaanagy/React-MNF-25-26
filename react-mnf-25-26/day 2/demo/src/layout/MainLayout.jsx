import React, { useState } from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'

export default function MainLayout() {
const [formData,setFormData]=useState({name:'',email:'',age:''})
const [users,setUsers]=useState([])
const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev=>({...prev,[name]:value})))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    setUsers((prev)=>[...prev,formData])
    setFormData({name:'',email:'',age:''})
}

  return(
    console.log(users),
    <>
    <h1>Login</h1>
<form onSubmit={handleSubmit} >
<input type='text' name='name' placeholder='Enter your name' onChange={handleChange} value={formData.name}/>
<input type='email' name='email' placeholder='Enter your email' onChange={handleChange} value={formData.email} />
<input type='number' name='age' placeholder='Enter your age' onChange={handleChange} value={formData.age} />
<button type='submit'>submit</button>
<h1></h1>
</form>
<h1>-----------------------------------------------------------------------</h1>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
  </tr>
  {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
</table>
    </>

  )
  
}











// export default function MainLayout() {
//     const [counter,setCounter]=useState(0) //[value,function]

//     const handleIncrease=()=>{
//         setCounter(counter+1)
//         console.log(counter)
//     }
//      const handleDecrease=()=>{
//         setCounter(counter-1)
//         console.log(counter)
//     }
//   return(
//   <>
//   <h1>counter:{counter}</h1>
//   <button onClick={handleIncrease} >+</button>
//   <button onClick={handleDecrease}>-</button>
//   </>
//   )
  
// }
