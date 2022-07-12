import React from 'react'

export  function Registration() {
  return (
    <div className="container">
    <div>Здесь регистрация для мигрантов бесплатно. (с) Ваш ФМС.</div>

    
    <htmlForm className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">Имя</label>
    <input type="text" className="form-control" id="validationCustom01" required/>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Фамилия</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
  </div>
  
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">E-mail</label>
    <input type="text" className="form-control" id="validationCustom05" placeholder='example: ivan@mail.ru' required/>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Телефон</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder='example: 89645553325' required/>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Пароль</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
  </div>

  <div className="col-12">
    <button className="btn btn-primary" type="submit">Регистрация</button>
  </div>
</htmlForm>
    </div>
  )
}
