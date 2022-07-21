import style from './MyCompletedAdvert.module.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useState } from 'react'
import MyCompletedAdvertItem from '../MyCompletedAdvertItem/MyCompletedAdvertItem'


export default function MyCompletedAdvert() {
  const id = useSelector((store) => store.user.user?.id)
  const [completedAdverts, setCompletedAdverts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}profile/advertisements/completed/${id}`)
      .then((res) => setCompletedAdverts(res.data))
  }, [id])

  return (
    <div>
      <div className={style.item}>
        {completedAdverts?.map((el) => <MyCompletedAdvertItem key={el.id} el={el} />)}
      </div>
    </div>
  )
}

