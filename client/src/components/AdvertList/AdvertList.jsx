import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import Carousel from '../Carousel/Carousel'
import Search from '../Search/Search'
import styles from './style.module.css'

export default function AdvertList() {
  // ! Завожу стейт для объявлений
  const [adverts, setAdverts] = useState([])

  // ! Достаем из стора все категории
  const { category } = useSelector((state) => state) 

  // ! Завожу стейт для текущей категории
  const [currentCategory, setCurrentCategory] = useState('')

  // ! Достаю из адресной строки параметр категории
  const { name } = useParams()

  useEffect(()=> {
   if(name) {
    setCurrentCategory(category.filter(el => el.identifier === name)[0].name)
   } else {
    setCurrentCategory('Все категории')
   }
  },[name])

  // console.log('currentCategory', currentCategory);

  // ! Достаем из стора результаты поиска
  const searchResult = useSelector((state) => state.search)

  // ! Достаем из адресной строки параметр поиска search
  let location = useLocation()
  let { search } = location

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
    <div className={styles.List}>
      <div>
        <h1>{currentCategory}</h1>
      </div>
      <div>
        <h2>Количество объявлений: {search ? searchResult.length : adverts.length}</h2>
      </div>
      <Search />
      {search ? (<div className={styles.list}>
        {searchResult.map((el) => <Carousel key={el.id} el={el} />)}
      </div>) : (<div className={styles.list}>
        {adverts.map((el) => <Carousel key={el.id} el={el} />)}
      </div>)}
    </div>
  )
}
