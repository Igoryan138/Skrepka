import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
export function Footer() {
  return (
    <div className={style.footer}>

      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">

          <li className="nav-item">
            <Link to='/' className="nav-link px-2 text-muted">Home</Link>
          </li>

          <li className="nav-item">
            <Link to='/faq' className="nav-link px-2 text-muted">FAQs</Link>
          </li>

        </ul>
        <p className="text-center text-muted">Создано группой програмистов при поддержке Elbrus Bootcamp</p>
      </footer>

    </div>

  )
}

