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

// import { Link } from 'react-router-dom'
// import style from './style.module.css'
// export function Footer() {
//   return (
//     <div classNameName={styles.footer} >

//       <footer classNameName="py-3"  >
//         <ul classNameName="nav justify-content-center border-bottom pb-3 mb-3">

//           <li classNameName="nav-item">
//             <Link to='/' classNameName="nav-link px-2 text-muted">Home</Link>
//           </li>

//           <li classNameName="nav-item">
//             <Link to='/faq' classNameName="nav-link px-2 text-muted">FAQs</Link>
//           </li>

//         </ul>
//         <p classNameName="text-center text-muted">Создано группой програмистов при поддержке Elbrus Bootcamp</p>
//       </footer>

//     </div>

//   )
// }

