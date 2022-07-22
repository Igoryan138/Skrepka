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
  console.log(myAdvert);
  return (
    <div>
      <div className={style.mainAdv}>
        <h2>Вам понравилось это объявление:</h2>
        <div className={style.ourItem}>
          <div className="card">
            <img src={`${process.env.REACT_APP_API_URL}${advert?.url[0]}`} style={{ width: '18rem' }} className="card-img-top" alt=""></img>
            <div className='card-body'>
              <Link to={`/add/${advert?.id}`}>
                <h5 className={`card-title ${style.textB}`}>{advert?.title}</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.myAdv}>
        {myAdvert === [] ?
          <>
            <br />
            <h3>Но кажется Вам не на что меняться. <br /> Добавьте товар, который хотели бы поменять.</h3>
          </>
          :
          <>
            <h2>Выберите товар, который хотите предложить на обмен:</h2>
            <div className={style.myItem}>
              {myAdvert?.map((el) => <MyAdvForExcange key={el.id} el={el} notMineAdvId={advert?.id} />)}
            </div>
          </>
        }
      </div>
    </div>
  )
}
