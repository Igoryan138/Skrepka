import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../redux/actions/user.action'
import AllCategories from '../AllCategories/AllCategories'

export function Navbar() {

  const dispatch = useDispatch()
  const id = useSelector((store) => store.user.user?.id)

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logOutUser(id))

  }
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
              {
                id ? (
                  <>
                    <li className="nav-item">
                      <Link to="profile" className="nav-link">Профиль</Link>
                    </li>

                    <li className="nav-item">
                     
                      <Link to="#" className="nav-link" onClick={logoutHandler}>Выйти</Link>
                    </li>
                  </>

                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="registration" className="nav-link">Регистрация</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="login" className="nav-link" >Войти</Link>
                    </li>
                  </>

                )
              }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

