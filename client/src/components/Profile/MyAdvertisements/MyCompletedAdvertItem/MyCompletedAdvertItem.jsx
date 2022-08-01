import style from './MyCompletedAdvertItem.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function MyCompletedAdvertItem({ el }) {
  return (
    <div className={style.card}>
      <div className="col">
        <Link to={`/add/${el.id}`}>
          <div className={style.card_body}>
            <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className="card-img-top" alt={el.title} />
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
