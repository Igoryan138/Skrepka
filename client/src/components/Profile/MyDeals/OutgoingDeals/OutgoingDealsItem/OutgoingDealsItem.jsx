import React from 'react'
import style from './OutgoingDealsItem.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function OutgoingDealsItem({ el, notMineGoods }) {
  const cancelDeal = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}deal/outgoing/${el.id}`)
  }
  console.log(el);


  return (
    <div className={style.main}>
      <div className={style.size}>
        <div className="col">
          <div className="card">
            <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className="card-img-top" alt="" />
            <div className="card-body">
              <Link to={`/add/${el.id}`}>
                <h5 className="card-title">{el.Good.title}</h5>
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
              <Link to={`/add/${notMineGoods.id}`}>
                <h5 className="card-title">{notMineGoods.title}</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={cancelDeal} className="btn btn-success">Отменить заявку</button>
    </div>
  )
}
