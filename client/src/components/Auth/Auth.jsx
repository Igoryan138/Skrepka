import React from 'react'

export  function Auth() {
  return (
    <div className='container'>
       <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
      <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
      <input type="password" className="htmlForm-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
  </div>
  )
}
