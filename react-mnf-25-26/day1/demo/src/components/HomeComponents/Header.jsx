import React from 'react'
import man from '../../assets/man.webp'
import styles from '../../styles/home.module.css'

export default function Header() {
  return (
    <div className={styles.headerImage} style={{backgroundImage:`url(${man})`}}>
      <div className={styles.overlay}/>
      <p style={{color:'white',fontSize:'4rem',zIndex:3}} >Hello, I'm</p>
    </div>
  )
}
