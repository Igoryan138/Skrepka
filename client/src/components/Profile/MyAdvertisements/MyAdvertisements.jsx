import React from 'react'
import { Link } from 'react-router-dom'

export default function MyAdvertisements() {
  return (
    <div>
      <div>
        Мои объявления
      </div>
      <div>

      </div>
      <div>
        <Link to='/add' className="btn btn-secondary">Добавить объявление</Link>
      </div>
    </div>
  )
}
