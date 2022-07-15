import React from 'react'
import styles from './carousel.module.css'

export default function Carousel({ el }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={el['Photos.url']} alt={el.title} />
        <h1>{el.city}</h1>
      </div>
      <div className={styles.cardBottom}>
        <h3 className={styles.title}>{el.title}</h3>
        <span className={styles.date}>{el.createdAt.slice(0, 10)}</span>
      </div>
    </div>
  )
}

