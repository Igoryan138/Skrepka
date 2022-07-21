import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../redux/actions/category.action'
import Carousel from '../Carousel/Carousel'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './main.module.css'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export function Main() {
  const dispatch = useDispatch()
  const [newAdverts, setNewAdverts] = useState([])

  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
  }, [dispatch])

  // ! Получаем последние 12 объявлений + записываем состояние 
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
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1770,
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
          nitialSlide: 2,
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

  return (
    <main className={styles.Main}>
      <Search />
      <h2>Категории</h2>
      <div className={styles.Category}>
        {category.map((el) => <Category key={el.id} el={el} />)}
      </div>
      <h2>Новые объявления</h2>
      <div className={styles.Slider}>
        <Slider {...settings}>
          {newAdverts.map(el => <Carousel key={el.id} el={el} />)}
        </Slider>
      </div>
    </main>
  )
}
