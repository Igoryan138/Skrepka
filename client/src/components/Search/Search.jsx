import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setSearchResult } from '../../redux/actions/search.action'
import styles from './search.module.css'

export default function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState({category: 'all', city: 'all'})

  // ! Обработчик инпутов
  const inputsHandler = (e) => {
    setSearch(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  // ! Обработчик формы
  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}category`, search)
      console.log('result', result.data);
      const { data } = result
      dispatch(setSearchResult(data))
      search.category === 'all' ? navigate(`/category?q=${search.phrase}`) : navigate(`/category/${search.category}?q=${search.phrase}`)  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={searchHandler}>
    <div className={styles.search}>
      <select onChange={inputsHandler} name="category" className="form-select h-100 w-25" aria-label="Default select example">
        <option value="all"> Все категории</option>
        <option value="personals">Личные вещи</option>
        <option value="electronics">Электроника</option>
        <option value="automobile">Авто</option>
        <option value="animals">Животные</option>
        <option value="hobbies">Хобби и отдых</option>
      </select>
      <div className="input-group mb-3 h-100 w-40">
        <input onChange={inputsHandler} name="phrase" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>
      <select onChange={inputsHandler} name="city" className="form-select h-100 w-25" aria-label="Default select example">
        <option value="all" >Все города</option>
        <option value="Москва">Москва</option>
        <option value="Иркутск">Иркутск</option>
        <option value="Челябинск">Челябинск</option>
        <option value="Саратов">Саратов</option>
        <option value="Анапа">Анапа</option>
      </select>
      <button type="submit" className="btn btn-primary h-100 w-10">Найти</button>
    </div>
    </form>
  )
}

