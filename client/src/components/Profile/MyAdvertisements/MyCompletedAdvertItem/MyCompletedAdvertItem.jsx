import style from './MyCompletedAdvertItem.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function MyCompletedAdvertItem({ el }) {
  const isCompleted = () => {
    axios.post(`${process.env.REACT_APP_API_URL}add/completed`, { id: el.id })
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
          </div>
        </div>
      </div>
    </div>
  )
}
