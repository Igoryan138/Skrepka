import React from 'react'
import style from './Success.module.css'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <>
    <br /><br />
      <div className={style.main}>
        <h2>Ваша заявка на обмен успешно отправлена!</h2>
        <Link to='/profile/outgoingDeals'>
          <button type="button" class="btn btn-outline-success">Перейти в мои заявки</button>
        </Link>        
      </div>
    </>
  )
}
