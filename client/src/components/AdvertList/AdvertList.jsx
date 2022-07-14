import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import styles from './style.module.css'

export default function AdvertList() {
  const [adverts, setAdverts] = useState([])

  // ! Достаю из адресной строки параметр
  const { name } = useParams()
  // ! Достаю из стора список всех категорий
  // const categories = useSelector((store) => store.category)

  // ! Запрашиваю с сервера все объявления по данной категории
  useEffect(() => {
    // ! Нахожу в сторе текущую категорию
    // const currentCategory = categories.filter(el => el.identifier === name)[0]
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
      {/* <div>Категория {currentCategory?.name}</div> */}
      <div className={styles.list}>
        {adverts.map((el) => <Advert key={el.id} el={el} />)}
      </div>
    </>
  )
}
