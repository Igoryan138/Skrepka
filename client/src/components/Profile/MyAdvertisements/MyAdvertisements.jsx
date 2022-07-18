import style from './MyAdvertisements.module.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useState } from 'react'
import MyAdvertItem from './MyAdvertItem/MyAdvertItem'

export default function MyAdvertisements() {
  const id = useSelector((store) => store.user.user.id)
  const [adverts, setAdverts] = useState([])
  
  useEffect(() => {
    const result = axios.get(`${process.env.REACT_APP_API_URL}profile/advertisements/${id}`)
    .then((res) => setAdverts(res.data))
  }, [id])
  console.log('adverts',adverts);
  


  return (
    <div>
      <div>
        Мои объявления
      </div>
      <div className={style.item}>
        {adverts?.map((el) => <MyAdvertItem key={el.id} el={el} />)}

      </div>
      <div>
        <Link to='/add' className="btn btn-secondary">Добавить объявление</Link>
      </div>
    </div>
  )
}
