import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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

              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Категория
                    </Link>
                    <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Link to="/category" className="dropdown-item">Все</Link></li>
                      <li><Link to="/category/personals" className="dropdown-item">Личные вещи</Link></li>
                      <li><Link to="/category/electronics" className="dropdown-item">Электроника</Link></li>
                      <li><Link to="/category/automobile" className="dropdown-item">Авто</Link></li>
                      <li><Link to="/category/animals" className="dropdown-item">Животные</Link></li>
                      <li><Link to="/category/hobbies" className="dropdown-item">Хобби и отдых</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <Link to="registration" className="nav-link">Регистрация</Link>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link">Войти</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

