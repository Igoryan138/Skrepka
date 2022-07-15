import style from './AdvertItem.module.css'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { selectAdv } from '../../redux/actions/adv.action';

export default function AdvertItem() {
  const { id } = useParams()
  const [advert, setAdvert] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`, { withCredentials: true })
      .then((res) => setAdvert(res.data))
  }, [id])

  return (
    <div>
      <div className={style.center}> 0
        <div className={style.photo}> 1
          <div className={style.title}>
            <div>
              Избранное
            </div>
            <h1>Название</h1>
          </div>
          <div className={style.bigPhoto}>
            <img src={advert?.url[0]} className={style.bigPhotoImg} alt="main" />
          </div>

          <div className={style.miniPhoto}>
            {advert?.url?.map((el, i) => <img key={i} src={el} className={style.miniPhotoImg} alt="mini" />)}
          </div>

        </div>

        <div className={style.contact}>
          <br /><br /><br /><br /><br />
          <div>
          <h1>Имя</h1>
          <h1>Телефон</h1>
          </div>
          <button type="button" className="btn btn-primary">Предложить обмен</button>
        </div>
      </div>

      <div className={style.description}>
        <h1>Описание</h1>
      </div>
    </div>

  )
}
