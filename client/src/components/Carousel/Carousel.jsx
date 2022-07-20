import React from 'react'
import { Link } from 'react-router-dom'
import styles from './carousel.module.css'

export default function Carousel({ el }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <Link to={`/add/${el.id}`}>
          <img src={`${process.env.REACT_APP_API_URL}${el['Photos.url']}`} alt={el.title} />
        </Link>
      </div>
      <div className={styles.cardBottom}>
        <Link to={`/add/${el.id}`}>
          <h3 className={styles.title}>{el.title}</h3>
        </Link>
        <span className={styles.date}>{el.createdAt.slice(0, 10)}</span>
      </div>
      <h5>{el.city}</h5>
    </div>
  )
}

