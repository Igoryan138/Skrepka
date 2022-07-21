import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import AdvertOne from '../AdvertOne/AdvertOne'
// import Carousel from '../Carousel/Carousel'
import Search from '../Search/Search'
import styles from './advertlist.module.css'

const limit = 20


export default function AdvertList() {
  const [pages, setPages] = useState(1)  //всего страниц
  const [page, setPage] = useState(1)    //текущая страница

  // ! Завожу стейт для объявлений
  const [adverts, setAdverts] = useState([])
  // console.log('adverts', adverts);

  // ! Достаем из стора все категории
  const { category } = useSelector((state) => state)

  // ! Завожу стейт для текущей категории
  const [currentCategory, setCurrentCategory] = useState('')

  // ! Достаю из адресной строки параметр категории
  const { name } = useParams()

  useEffect(() => {
    if (name) {
      if (category && category.length) {
        setCurrentCategory(category.filter(el => el.identifier === name)[0].name)
      }
    } else {
      setCurrentCategory('Все категории')
    }
  }, [category, name])

  // console.log('currentCategory', currentCategory);

  // ! Достаем из стора результаты поиска
  const searchResult = useSelector((state) => state.search)

  // ! Достаем из адресной строки параметр поиска search
  let location = useLocation()
  let { search } = location
  // console.log('search', search);

  // ! Запрашиваю с сервера все объявления по данной категории
  useEffect(() => {
    const skip = (page - 1) * limit
    if (name) {
      axios.get(`${process.env.REACT_APP_API_URL}category/${name}?limit=${limit}&skip=${skip}`)
        .then((advertsFromServer) => {
          // console.log('advertsFromServer', advertsFromServer);
          // ! setAdverts(advertsFromServer.data.items)
          setAdverts(advertsFromServer.data.items)
          // setPages(Math.ceil(advertsFromServer.data.count / limit))    //узнаем кол-во страниц
        })
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}category?limit=${limit}&skip=${skip}`)
        .then((advertsFromServer) => {
          // console.log('advertsFromServer', advertsFromServer);
          // ! setAdverts(advertsFromServer.data.items)
          setAdverts(advertsFromServer.data.items)
          // setPages(Math.ceil(advertsFromServer.data.count / limit))  //узнаем кол-во страниц
        })
    }
  }, [name, page])

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
        {searchResult.map((el) => <AdvertOne key={el.id} el={el} />)}
      </div>) : (<div className={styles.list}>
        {adverts.map((el) => <AdvertOne key={el.id} el={el} />)}
      </div>)}

    </div>
  )
}
