import React from 'react'
import { Link } from 'react-router-dom'

export default function Advert({ el }) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={`/add/${el.id}`}>
        <img src={el['Photos.url']} className="card-img-top" alt={el.title} />
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
        </div>
      </Link>
      <div className="card-body">
        <p className="card-text">{el.city}</p>
        <p className="card-text">{el.createdAt.slice(0,10)}</p>
      </div>

    </div>

  )
}
