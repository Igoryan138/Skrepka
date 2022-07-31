import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../redux/actions/category.action'
import Carousel from '../Carousel/Carousel'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Slider from "react-slick";
import styles from './main.module.css'

export function Main() {
  const dispatch = useDispatch()
  const [newAdverts, setNewAdverts] = useState([])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
  }, [dispatch])

  // ! Получаем последние 15 объявлений + записываем состояние 
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/new`)
      .then((advertsFromServer) => {
        setNewAdverts(advertsFromServer.data)
      })
  }, [])

  // ! Достаем категории из стора
  const { category } = useSelector((state) => state)

  return (
    <main className={styles.Main}>
      <br /><img src={`${process.env.REACT_APP_API_URL}icon/skrepka.png`} alt='' />
      <Search />
      {/* <h2 className={styles.titleCategory}>Категории</h2> */}
      <br /><img src={`${process.env.REACT_APP_API_URL}icon/category.png`} className={styles.titleCategory} alt='' />
      <div className={styles.Category}>
        {category.map((el) => <Category key={el.id} el={el} />)}
      </div>
      <img src={`${process.env.REACT_APP_API_URL}icon/newAdvs2.png`} className={styles.titleNewAdv} alt='' />
      <div className={styles.Slider}>
        <Slider {...settings}>
        {newAdverts.map(el => <Carousel key={el.id} el={el} />)}
        </Slider>
      </div>
    </main>
  )
}



