import style from './MyAdvertItem.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function MyAdvertItem({ el }) {

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
