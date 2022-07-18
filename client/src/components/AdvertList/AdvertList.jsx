import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Advert from '../Advert/Advert'
import Carousel from '../Carousel/Carousel'
import Search from '../Search/Search'
import styles from './style.module.css'

const limit = 2


export default function AdvertList() {
  const [pages, setPages] = useState(1)          //всего страниц
  const [page, setPage] = useState(1)       //текущая страница
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
        setCurrentCategory(category.filter(el => el.identifier === name)[0].name)
      }
    } else {
      setCurrentCategory('Все категории')
    }
  }, [name])

  // console.log('currentCategory', currentCategory);

  // ! Достаем из стора результаты поиска
  const searchResult = useSelector((state) => state.search)

  // ! Достаем из адресной строки параметр поиска search
  let location = useLocation()
  let { search } = location

  // ! Запрашиваю с сервера все объявления по данной категории
  useEffect(() => {
    const skip = (page - 1) * limit
    if (name) {
      axios.get(`${process.env.REACT_APP_API_URL}category/${name}?limit=${limit}&skip=${skip}`)
        .then((advertsFromServer) => {
          setAdverts(advertsFromServer.data.items)
          setPages(Math.ceil(advertsFromServer.data.count / limit))    //узнаем кол-во страниц
        })
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}category?limit=${limit}&skip=${skip}`)
        .then((advertsFromServer) => {
          setAdverts(advertsFromServer.data.items)
          setPages(Math.ceil(advertsFromServer.data.count / limit))  //узнаем кол-во страниц
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
       {/* <div className="pagination">
        <button onClick={()=> setPage(page -1)}>
          left
        </button>
        <span>
          {page} / {pages}     
        </span>
        <button onClick={()=> setPage(page +1)}>
          right
        </button>
      </div>  */}
     

     <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
          <li className="page-item" onClick={ ()=> setPage(page -1)}>
              <a className="page-link"  >Назад</a>
            </li>

            {/* {pages.map((el) =><li className="page-item"><a className="page-link" href={el}>1</a></li> */}

            <li className="page-item"><a className="page-link" href={page}>1</a></li>


            <li className="page-item" onClick={ ()=> setPage(page +1)}>
              <a className="page-link"  >Вперед</a>
            </li>
          </ul>
        </nav>
      </div>
     

      {search ? (<div className={styles.list}>
        {searchResult.map((el) => <Carousel key={el.id} el={el} />)}
      </div>) : (<div className={styles.list}>
        {adverts.map((el) => <Carousel key={el.id} el={el} />)}
      </div>)}







      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>



  )
}
