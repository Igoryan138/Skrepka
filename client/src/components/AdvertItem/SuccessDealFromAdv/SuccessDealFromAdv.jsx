import React from 'react'
import style from './SuccessDealFromAdv.module.css'
import { Link } from 'react-router-dom'

export default function SuccessDealFromAdv() {
  return (
    <>
    <br />
      <div className={style.main}>
        <h2>Поздравляем с успешным совершением сделки!</h2>
        <h3>Теперь Вы можете добавить новое объявление к себе на страницу и продолжить свой путь к мечте!</h3>
        <Link to='/profile/outgoingDeals'>
          <button type="button" class="btn btn-success">Посмотреть все мои объявления</button>
        </Link>        
      </div>
    </>
  )
}
