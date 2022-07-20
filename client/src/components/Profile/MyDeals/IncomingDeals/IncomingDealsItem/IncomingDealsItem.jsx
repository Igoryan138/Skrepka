import React from 'react'
import style from './IncomingDealsItem.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function IncomingDealsItem({ el, notMineGoods }) {
  const acceptDeal = () => {
    axios.put(`${process.env.REACT_APP_API_URL}deal/incoming/${notMineGoods.id}`)
  }
  
  const cancelDeal = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}deal/outgoing/${notMineGoods.id}`)
  }

  return (
    <div className={style.main}>
      <div className={style.size}>
        <div className="col">
          <div className="card">
            <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className="card-img-top" alt="" />
            <div className="card-body">
              <Link to={`/add/${el.id}`}>
                <h5 className="card-title">{el.title}</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.size}>
        <div className="col">
          <div className="card">
            <img src={`${process.env.REACT_APP_API_URL}${notMineGoods.url}`} className="card-img-top" alt="" />
            <div className="card-body">
              <Link to={`/add/${notMineGoods.Good.id}`}>
                <h5 className="card-title">{notMineGoods.Good.title}</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={acceptDeal} className="btn btn-success">Принять</button>
      <button type="button" onClick={cancelDeal} className="btn btn-danger">Отклонить</button>
    </div>
  )
}
