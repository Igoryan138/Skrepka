import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import AdvertOne from '../AdvertOne/AdvertOne'
import Search from '../Search/Search'
import styles from './advertlist.module.css'


export default function AdvertList() {
  const [pages, setPages] = useState(1)  //всего страниц
  const [page, setPage] = useState(1)    //текущая страница

  // ! Завожу стейт для объявлений
  const [adverts, setAdverts] = useState([])

  // ! Достаем из стора все категории
  const { category } = useSelector((state) => state)

  // ! Завожу стейт для текущей категории
  const [currentCategory, setCurrentCategory] = useState('')

  // ! Достаю из адресной строки параметр категории
  const { name } = useParams()

  useEffect(() => {
    if (name) {
      if (category && category.length) {
        setCurrentCategory(category.filter(el => el.identifier === name)[0].title)
      }
    } else {
      setCurrentCategory('icon/allCategory.png')
    }
  }, [category, name])

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
          // ! setAdverts(advertsFromServer.data.items)
          setAdverts(advertsFromServer.data?.items)
        })
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}category`)
        .then((advertsFromServer) => {
          // ! setAdverts(advertsFromServer.data.items)
          setAdverts(advertsFromServer.data?.items)
        })
    }
  }, [name, page])

  return (
    <div className={styles.List}>
      <Search />
      <div className={styles.title}>
        <img src={`${process.env.REACT_APP_API_URL}${currentCategory}`} alt='' />
      </div>
      <div className={styles.advCount}>
        <p>Количество объявлений: {search ? searchResult.length : adverts.length}</p>
      </div>
     
      {search ? (<div className={styles.list}>
        {searchResult.map((el) => <AdvertOne key={el.id} el={el} />)}
      </div>) : (<div className={styles.list}>
        {adverts.map((el) => <AdvertOne key={el.id} el={el} />)}
      </div>)}

    </div>
  )
}
