import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export  function Auth() {

  const [input, setInput] = useState('');
  
  const navigate = useNavigate();
  

  function inputHandler(e){
    setInput((prev) => ({...prev,[e.target.name]: e.target.value})
    )
  }

  function authHandler(e){
    e.preventDefault()
    axios.post('http://localhost:3100/login', input)
      .then(res => {
       if(res.data){
        setInput('')
        navigate('/')
       }
      })
  }


  return (
    <div className='container'>
       <form onSubmit={(e)=> authHandler(e)}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
      <input name='email' onChange={inputHandler} type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
      <input name='password' onChange={inputHandler} type="password" className="htmlForm-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
  </div>
  )
}
