import style from './Favourites.module.css'
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import { useState } from 'react'
import FavouriteItem from './FavouriteItem/FavouriteItem'


export default function Favourites() {
  const id = useSelector((store) => store.user.user?.id )
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/favourites/${id}`)
    .then((res) => setAdverts(res.data))
  }, [id])
 

  return (
    <div>
      <div className={style.item}>
        {adverts?.map((el) => <FavouriteItem key={el.id} el={el} />)}
      </div>
    </div>
  )
}
