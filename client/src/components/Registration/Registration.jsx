import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/user.action'
import styles from './registr.module.css'



export function Registration() {


  const [input, setInput] = useState({});
  const dispatch = useDispatch();



  function inputHandler(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })
    )
  }

  function regHandler(event) {
    event.preventDefault()
    dispatch(setUser(input))
  }

  return (
    <div className={`${styles.registr} container`}>
      <form onSubmit={(e) => regHandler(e)} >
        <img src={`${process.env.REACT_APP_API_URL}icon/registration.png`} alt='' />
        <div >
          {/* <label htmlFor="validationCustom01" className="htmlForm-label">Имя</label> */}
          <input name='firstName' placeholder='Введите имя' onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom01" required />
        </div>

        <div >
          {/* <label htmlFor="validationCustom02" className="htmlForm-label">Фамилия</label> */}
          <input name='lastName' placeholder='Введите фамилию' onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom02" required />
        </div>

        <div >
          {/* <label htmlFor="validationCustom05" className="htmlForm-label">E-mail</label> */}
          <input name='email' onChange={inputHandler} type="email" className="htmlForm-control" id="validationCustom05" placeholder='E-mail: ivan@mail.ru' required />
        </div>

        <div >
          {/* <label htmlFor="validationCustom02" className="htmlForm-label">Телефон</label> */}
          <input name='phone' onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom02" placeholder='Телефон: +7 (999) 999-99-99' required />
        </div>

        <div >
          {/* <label htmlFor="validationCustom02" className="htmlForm-label">Пароль</label> */}
          <input name='password' onChange={inputHandler} type="password" placeholder='Придумайте пароль' className="htmlForm-control" id="validationCustom02" required />
        </div>

        <div className="col-12">
          <button className="btn btn-outline-primary mt-4" type="submit">Регистрация</button>
        </div>
      </form>
    </div>
  )
}
