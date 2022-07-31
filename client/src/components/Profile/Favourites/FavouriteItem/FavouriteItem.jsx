import React from 'react'
import styles from './FavouriteItem.module.css'
import { Link } from 'react-router-dom';

export default function FavouriteItem({ el }) {
  return (
    <div className={styles.card}>
    <div className={styles.cardTop}>
      <Link to={`/add/${el.id}`}>
        <img src={`${process.env.REACT_APP_API_URL}${el.url}`} alt={el.title} />
      </Link>
    </div>
    <div className={styles.cardBottom}>
      <Link to={`/add/${el.id}`}>
        <span className={styles.title}>{el.title}</span>
      </Link>
    </div>
  </div>
  )
}
