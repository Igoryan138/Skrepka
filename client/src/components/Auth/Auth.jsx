import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { authUser, } from '../../redux/actions/user.action';
import styles from './auth.module.css'

export function Auth() {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();


  function inputHandler(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })
    )
  }

  function authHandler(e) {
    e.preventDefault()
    dispatch(authUser(input))
    setInput('')
  }


  return (
    <div className={`${styles.auth} container`}>
      <form onSubmit={(e) => authHandler(e)}>
        <img src={`${process.env.REACT_APP_API_URL}icon/login.png`} alt='' />
        <div className="mb-3">
          {/* <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label> */}
          <input name='email' placeholder='E-mail: ivan@mail.ru' onChange={inputHandler} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label> */}
          <input name='password' placeholder='Введите пароль' onChange={inputHandler} type="password" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </div>
  )
}
