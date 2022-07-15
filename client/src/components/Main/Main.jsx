import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../redux/actions/category.action'
import Advert from '../Advert/Advert'
import Carousel from '../Carousel/Carousel'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './main.module.css'

export function Main() {
  const dispatch = useDispatch()
  const [newAdverts, setNewAdverts] = useState([])

  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
  }, [dispatch])

  // ! Получаем последние 10 объявлений + записываем состояние 
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/new`)
      .then((advertsFromServer) => {
        setNewAdverts(advertsFromServer.data)
      })
  }, [])

  // ! Достаем категории из стора
  const { category } = useSelector((state) => state)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main className={styles.Main}>
      <Search />
      <h2>Категории</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {category.map((el) => <Category key={el.id} el={el} />)}
      </div>
      <div>
        <h2>Новые объявления</h2>
      </div>
      <Slider {...settings}>
        {newAdverts.map(el => <Carousel key={el.id} el={el} />)}
      </Slider>
    </main>
  )
}
