import React from 'react'

import styles from './footer.module.css'

export  function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
      Footer
    </footer>
    </div> 
)}

// import { Link } from 'react-router-dom'
// import style from './style.module.css'
// export function Footer() {
//   return (
//     <div style={{
//       position: "fixed",
//       left: 0,
//       bottom: 0,
//       right: 0,
//       backgroundColor: "red"
//     }}>

//       <footer className="py-3"  >
//         <ul className="nav justify-content-center border-bottom pb-3 mb-3">

//           <li className="nav-item">
//             <Link to='/' className="nav-link px-2 text-muted">Home</Link>
//           </li>

//           <li className="nav-item">
//             <Link to='/faq' className="nav-link px-2 text-muted">FAQs</Link>
//           </li>

//         </ul>
//         <p className="text-center text-muted">Создано группой програмистов при поддержке Elbrus Bootcamp</p>
//       </footer>

//     </div>

//   )
// }

