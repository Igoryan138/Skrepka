import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export  function Registration() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  
  function regHandler(event){
  event.preventDefault()
  axios.post('http://localhost:3001/registration',{
    firstName,
    lastName,
    email,
    tel,
    password
  }, { withCredentials:true})
    .then(res =>{
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('firstName', res.data.firstName);
    })
  
    setFirstName('')
    setLastName('')
    setEmail('')
    setTel('')
    setPassword('')
    // navigate('/')
  }

  return (
    <div className="container">
    <div>Здесь регистрация для мигрантов бесплатно. (с) Ваш ФМС.</div>

    
    <htmlForm  onSubmit={(e)=> regHandler(e)} className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label value={firstName}  onChange={(e)=>setFirstName(e.target.value)} for="validationCustom01" className="form-label">Имя</label>
    <input type="text" className="form-control" id="validationCustom01" required/>
  </div>

  <div className="col-md-4">
    <label value={lastName}  onChange={(e)=>setLastName(e.target.value)} for="validationCustom02" className="form-label">Фамилия</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
  </div>
  
  <div className="col-md-3">
    <label value={email}  onChange={(e)=>setEmail(e.target.value)} for="validationCustom05" className="form-label">E-mail</label>
    <input type="text" className="form-control" id="validationCustom05" placeholder='example: ivan@mail.ru' required/>
  </div>

  <div className="col-md-4">
    <label value={tel}  onChange={(e)=>setTel(e.target.value)} for="validationCustom02" className="form-label">Телефон</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder='example: 89645553325' required/>
  </div>

  <div className="col-md-4">
    <label value={password}  onChange={(e)=>setPassword(e.target.value)} for="validationCustom02" className="form-label">Пароль</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
  </div>

  <div className="col-12">
    <button className="btn btn-primary" type="submit">Регистрация</button>
  </div>
</htmlForm>
    </div>
  )
}
