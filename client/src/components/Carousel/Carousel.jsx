import React from 'react'
import { Link } from 'react-router-dom'
import styles from './carousel.module.css'

export default function Carousel({ el }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <Link to={`add/${el.id}`}>
          <img src={el['Photos.url']} alt={el.title} />
        </Link>
        <h1>{el.city}</h1>
      </div>
      <div className={styles.cardBottom}>
        <Link to={`add/${el.id}`}>
          <h3 className={styles.title}>{el.title}</h3>
        </Link>
        <span className={styles.date}>{el.createdAt.slice(0, 10)}</span>
      </div>
    </div>
  )
}

