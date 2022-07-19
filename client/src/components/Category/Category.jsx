import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({ el }) {
  return (
    <div className="card" style={{ width: "12rem" }}>
      <Link to={`category/${el.identifier}`}>
        <img style={{ height: "200px" }} src={`${process.env.REACT_APP_API_URL}${el.logo}`} className="card-img-top" alt={el.name} />
      </Link>
      <div className="card-body">
        <p className="card-text">{el.name}</p>
      </div>
    </div>
  )
}

