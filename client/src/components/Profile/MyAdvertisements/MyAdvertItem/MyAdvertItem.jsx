import style from './MyAdvertItem.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MyAdvertItem({ el }) {
  const isCompleted = () => {
    axios.post(`${process.env.REACT_APP_API_URL}add/completed`, { id: el.id })
  }

  return (
        <div className={style.card}>
          <img src={`${process.env.REACT_APP_API_URL}${el.url}`}className="card-img-top" alt="" />
          <div className={style.card_body}>
            <Link to={`/add/${el.id}`}>
              <h5 className="card-title">{el.title}</h5>
            </Link>
            <button type="button" onClick={isCompleted} className="btn btn-info">Завершить</button>
          </div>
        </div>
  )
}
