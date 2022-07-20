import style from './MyAdvertisements.module.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useState } from 'react'
import MyAdvertItem from './MyAdvertItem/MyAdvertItem'

export default function MyAdvertisements() {
  const id = useSelector((store) => store.user.user?.id)
  // console.log('id', id);
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    const result =  axios.get(`${process.env.REACT_APP_API_URL}profile/advertisements/${id}`)
    .then((res) => setAdverts(res.data))
  }, [id])
 

  return (
    <div>
      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">Активные</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="completed">Завершенные</Link>
          </li>
        </ul>
      </div>
      <div className={style.item}>
        {adverts?.map((el) => <MyAdvertItem key={el.id} el={el} />)}
      </div>
    </div>
  )
}
