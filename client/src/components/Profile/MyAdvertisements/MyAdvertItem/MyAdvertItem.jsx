import style from './MyAdvertItem.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MyAdvertItem({ el, setAdverts, adverts }) {
  const deleteAdvert = async () => {
    await axios.delete(`${process.env.REACT_APP_API_URL}add/${el.id}`)
    const undelAdvert = adverts.filter(add => add.id !== el.id)
    setAdverts(undelAdvert)
  }

  return (
    <div className={style.card}>
      <Link to={`/add/${el.id}`}>
        <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className="card-img-top" alt="" />
      </Link>
      <div className={style.card_body}>
        <Link to={`/add/${el.id}`}>
          <h5 className={`${style.h5} card-title}`}>{el.title}</h5>
        </Link>
        <button type="button" onClick={deleteAdvert} className="btn btn-outline-outline-danger">Удалить</button>
      </div>
    </div>
  )
}
