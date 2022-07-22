import React from 'react'
import style from './MyAdvForExcange.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function MyAdvForExcange({ el, notMineAdvId }) {
  const myUserId = useSelector((store) => store.user.user?.id)
  const addDeal = () => {
    axios.post(`${process.env.REACT_APP_API_URL}deal`, {
      notMineGoodId: notMineAdvId,
      myGoodId: el.id,
      myUserId
    })
  }
  
  return (
    <div className={style.size}>
      
        <div className="card">
          <img src={`${process.env.REACT_APP_API_URL}${el.url}`} className={style.img} alt="" />
          <div className="card-body">
            <Link to={`/add/${el.id}`}>
              <h6 className={`card-title ${style.textB}`}>{el.title}</h6>
            </Link>
            <Link to={`/exchange/success`}>
              <button type="button" onClick={addDeal} className="btn btn-outline-success">Предложить на обмен</button>
            </Link>
          </div>
        </div>

    </div>
  )
}
