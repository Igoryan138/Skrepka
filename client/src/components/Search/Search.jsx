import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './search.module.css'

export default function Search() {
  const navigate = useNavigate()
  const [search, setSearch] = useState({category: 'all', city: 'all'})

  // ! Обработчик инпутов
  const inputsHandler = (e) => {
    setSearch(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  // ! Обработчик формы
  const searchHandler = async (e) => {
    e.preventDefault();
    // console.log('search', search);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}category`, search)
    console.log('result', result.data);

    // search.category === 'all' ? navigate("category") : navigate(`category/${search.category}`)
    navigate("search")
  }

  return (
    <form onSubmit={searchHandler}>
    <div className={styles.search}>
      <select onChange={inputsHandler} name="category" className="form-select" aria-label="Default select example">
        <option value="all"> Все категории</option>
        <option value="personals">Личные вещи</option>
        <option value="electronics">Электроника</option>
        <option value="automobile">Авто</option>
        <option value="animals">Животные</option>
        <option value="hobbies">Хобби и отдых</option>
      </select>
      <div className="input-group mb-3">
        <input onChange={inputsHandler} required name="phrase" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>
      <select onChange={inputsHandler} name="city" className="form-select" aria-label="Default select example">
        <option value="all" >Все города</option>
        <option value="Москва">Москва</option>
        <option value="Питер">Питер</option>
        <option value="Краснодар">Краснодар</option>
      </select>
      <button type="submit" className="btn btn-primary">Найти</button>
    </div>
    </form>
  )
}

