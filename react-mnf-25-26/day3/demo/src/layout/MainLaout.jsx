import React, { useEffect, useRef, useState } from 'react'
import Login from '../pages/Login'
import axios from 'axios'

export default function MainLaout() {
    const inputRef=useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
  <>
  <input type='text' name='username' placeholder='enter your name' ref={inputRef} />
  </>
  )
}


//componentDidMount --->after intial render only --->useEffect(()=>{},[])
//componentDidUpdate--->called every time any state change --->useEffect(()=>{},[isShow])
//componentWillUnmount--->call when component destroy


// export default function MainLaout() {
//         const [isShow,setIsShow]=useState(false)
//         const [title,setTitle]=useState('React')

//         useEffect(()=>{
//             //fetch users
//           console.log('fetch users')
//         },[])

//              useEffect(()=>{
//               console.log('isShow updated')
//         },[isShow])
//   return (
//     console.log('re render'),
//     <>
//     <div>
//        <button onClick={()=>{setTitle('Anguler')}} >change title</button>
//         <button onClick={()=>{setIsShow(true)}} >login</button>
//        {isShow && <Login logout={()=>setIsShow(false)} />}
//     </div>
//         </>
//   )
// }