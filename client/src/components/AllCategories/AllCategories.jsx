import React from 'react'
import { Link } from 'react-router-dom'

export default function AllCategories() {
  return (
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
  )
}
