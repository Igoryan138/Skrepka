import style from './Exchange.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MyAdvForExcange from '../MyAdvForExcange/MyAdvForExcange'

export default function Exchange({ loginUser }) {
  const { id } = useParams()
  const [advert, setAdvert] = useState()
  const [myAdvert, setMyAdvert] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
      .then((res) => setAdvert(res.data))
    axios.get(`${process.env.REACT_APP_API_URL}profile/advertisements/${loginUser}`)
      .then((res) => setMyAdvert(res.data))
  }, [id, loginUser])

  return (
    <div>
      <div>
        <h2>Вам понравилось это объявление:</h2>
        <img src={advert?.url[0]} style={{ width: '18rem' }} alt=""></img>
        <div className='card-body'>
          <Link to={`/add/${advert?.id}`}>
            <h5 className="card-title item">{advert?.title}</h5>
          </Link>
        </div>
      </div>

      <div>
        <h2>Выберите товар, который хотите предложить на обмен:</h2>
        <div className={style.item}>
          {myAdvert?.map((el) => <MyAdvForExcange key={el.id} el={el} notMineAdvId={advert.id}/>)}
        </div>
      </div>
    </div>
  )
}
