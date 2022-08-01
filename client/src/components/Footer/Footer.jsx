import React from 'react'
import { Link } from 'react-router-dom'

import styles from './footer.module.css'

export function Footer() {
  return (
    <div className={styles.footer} >

      <footer className="text-center text-lg-start">

        

        <ul className={`${styles.ul_text} nav justify-content-around border-bottom`}>

      <li className="nav-item">
             <Link to='/' >Home</Link>
           </li>
           <li className="nav-item">
             <span className={styles.ul_text}>Все права защищены Лисами </span>
           </li>
           <li className="nav-item">
             <Link to='/faq' >FAQs</Link>
           </li>
           </ul>
   

      </footer>



    </div>
  )
}

