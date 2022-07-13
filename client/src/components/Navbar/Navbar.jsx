import React from 'react'
import { Link } from 'react-router-dom'
import AllCategories from '../AllCategories/AllCategories'

export function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Главная</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <AllCategories />

              <li className="nav-item">
                <Link to="registration" className="nav-link">Регистрация</Link>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link" >Войти</Link>
              </li>
              <li className="nav-item">
                <Link to="profile" className="nav-link">Профиль</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

