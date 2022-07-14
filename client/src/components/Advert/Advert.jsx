import React from 'react'

export default function Advert({el}) {
  // console.log('el', el);
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={el.photo} className="card-img-top" alt={el.title} />
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <p className="card-text">{el.description}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
  )
}
