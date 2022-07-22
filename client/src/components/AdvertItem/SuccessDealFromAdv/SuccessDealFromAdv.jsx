import React from 'react'
import style from './SuccessDealFromAdv.module.css'
import { Link } from 'react-router-dom'

export default function SuccessDealFromAdv() {
  return (
    <>
    <br />
      <div className={style.main}>
        <h2>Поздравляем с успешным совершением сделки!</h2>
        <h3>Новое объявление уже добавлено к Вам на страницу. Продолжайте свой путь к мечте!</h3>
        <Link to='/profile/advertisements'>
          <button type="button" class="btn btn-outline-success">Посмотреть мои объявления</button>
        </Link>        
      </div>
    </>
  )
}
