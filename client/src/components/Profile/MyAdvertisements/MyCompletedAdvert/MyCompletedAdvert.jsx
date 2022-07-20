import style from './MyCompletedAdvert.module.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useState } from 'react'
import MyCompletedAdvertItem from '../MyCompletedAdvertItem/MyCompletedAdvertItem'


export default function MyCompletedAdvert() {
  const id = useSelector((store) => store.user.user.id)
  const [completedAdverts, setCompletedAdverts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}profile/advertisements/completed/${id}`)
      .then((res) => setCompletedAdverts(res.data))
  }, [id])

  return (
    <div>
      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/profile/advertisements">Активные</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="completed">Завершенные</Link>
          </li>
        </ul>
      </div>
      <div className={style.item}>
        {completedAdverts?.map((el) => <MyCompletedAdvertItem key={el.id} el={el} />)}

      </div>
      {/* <div>
        <Link to='/add' className="btn btn-secondary">Добавить объявление</Link>
      </div> */}
    </div>
  )
}

