import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import Search from '../Search/Search'
import styles from './style.module.css'

export default function AdvertList() {
  // ! Завожу стейт для объявлений
  const [adverts, setAdverts] = useState([])

  // ! Достаю из адресной строки параметр категории
  const { name } = useParams()

  // ! Запрашиваю с сервера все объявления по данной категории
  useEffect(() => {
    if (name) {
      axios.get(`${process.env.REACT_APP_API_URL}category/${name}`)
        .then((advertsFromServer) => {
          setAdverts(advertsFromServer.data)
        })
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}category`)
        .then((advertsFromServer) => {
          setAdverts(advertsFromServer.data)
        })
    }
  }, [name])

  return (
    <>
    <Search />
      <div className={styles.list}>
        {adverts.map((el) => <Advert key={el.id} el={el} />)}
      </div>
    </>
  )
}
