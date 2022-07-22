import React from 'react'
import style from './IncomingCompletedDealsItem.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function IncomingCompletedDealsItem({ el, notMineIncomingGoods }) {
  const returnDeal = () => {
    axios.put(`${process.env.REACT_APP_API_URL}deal/return/${notMineIncomingGoods.id}`)
  }

  return (
    <div className={style.main}>
      <div className={style.change}>
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
              <img src={`${process.env.REACT_APP_API_URL}${notMineIncomingGoods.url}`} className="card-img-top" alt="" />
              <div className="card-body">
                <Link to={`/add/${notMineIncomingGoods.Good.id}`}>
                  <h5 className="card-title">{notMineIncomingGoods.Good.title}</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={returnDeal} className="btn btn-outline-secondary">Вернуть</button>
    </div>
  )
}
