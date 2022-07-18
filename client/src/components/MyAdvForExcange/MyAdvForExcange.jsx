import React from 'react'
import style from './MyAdvForExcange.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function MyAdvForExcange({ el, notMineAdvId }) {
  const addDeal = () => {
    axios.post(`${process.env.REACT_APP_API_URL}deal`, {
      firstGoodId: notMineAdvId,
      secondGoodId: el.id
    })
  }
  
  return (
    <div className={style.size}>
      <div className="col">
        <div className="card">
          <img src={el.url} className="card-img-top" alt="" />
          <div className="card-body">
            <Link to={`/add/${el.id}`}>
              <h5 className="card-title">{el.title}</h5>
            </Link>
            <Link to={`/exchange/success`}>
              <button type="button" onClick={addDeal} class="btn btn-success">Предложить на обмен</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
