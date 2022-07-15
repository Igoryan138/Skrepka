import React from 'react'

export default function Category({ el }) {
  return (
    <div className="card" style={{ width: "12rem" }}>
      <img src={el.logo} className="card-img-top" alt={el.name} />
      <div className="card-body">
        <p className="card-text">{el.name}</p>
      </div>
    </div>
  )
}

