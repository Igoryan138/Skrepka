import React from 'react'
import { Link } from 'react-router-dom'
import styles from './category.module.css'

export default function Category({ el }) {
  return (
    <div className={`${styles.category} card`}>
      <Link to={`category/${el.identifier}`}>
        <img src={`${process.env.REACT_APP_API_URL}${el.logo}`} className="card-img-top" alt={el.name} />
      </Link>
      <div className={styles.category_text}>
        <span className="card_text">{el.name}</span>
      </div>
    </div>
  )
}

