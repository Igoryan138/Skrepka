import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div>
      <h2>Ваша заявка на обмен успешно отправлена!</h2>
      <p>Перейти в <Link to='/profile/outgoingDeals' >Мои заявки</Link></p>
    </div>
  )
}
