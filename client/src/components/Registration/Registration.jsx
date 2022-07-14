import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/user.action'



export  function Registration() {
  

  const [input, setInput] = useState({});
  const dispatch = useDispatch();
 
  

  function inputHandler(e){
    setInput((prev) => ({...prev,[e.target.name]: e.target.value})
    )
  }
  
  function regHandler(event){
    
  event.preventDefault()
    dispatch(setUser(input))
   
      // setInput('')
  }

  return (
    <div className="container">
    <form  onSubmit={(e)=> regHandler(e)} className="row g-3 needs-validation" >
  <div className="col-md-4">
    <label  htmlFor="validationCustom01" className="htmlForm-label">Имя</label>
    <input  name='firstName'  onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom01" required/>
  </div>

  <div className="col-md-4">
    <label  htmlFor="validationCustom02" className="htmlForm-label">Фамилия</label>
    <input name='lastName'  onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom02" required/>
  </div>
  
  <div className="col-md-3">
    <label  htmlFor="validationCustom05" className="htmlForm-label">E-mail</label>
    <input name='email'  onChange={inputHandler} type="email" className="htmlForm-control" id="validationCustom05" placeholder='example: ivan@mail.ru' required/>
  </div>

  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="htmlForm-label">Телефон</label>
    <input name='phone'  onChange={inputHandler} type="text" className="htmlForm-control" id="validationCustom02" placeholder='example: 89645553325' required/>
  </div>

  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="htmlForm-label">Пароль</label>
    <input name='password'  onChange={inputHandler} type="password" className="htmlForm-control" id="validationCustom02" required/>
  </div>

  <div className="col-12">
    <button className="btn btn-primary" type="submit">Регистрация</button>
  </div>
</form>
    </div>
  )
}
