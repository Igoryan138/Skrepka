import React from 'react'
import style from './FavouriteItem.module.css'
import { Link } from 'react-router-dom';

export default function FavouriteItem({ el }) {
  console.log('el---', el);
  return (
    // <div className={style.size}>
      // <div className="col">
        <div className="card">
          <div className="mh-200 flex-center">

          <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <Link to={`/add/${el.id}`}>
              <h5 className="card-title">{el.title}</h5>
            </Link>
          </div>
        </div>
      // </div>
    // </div>
  )
}
