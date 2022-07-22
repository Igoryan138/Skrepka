import style from './ActiveAdvert.module.css'
import axios from 'axios'
import React from 'react'
import { useSelector } from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../../Modal/Modal'


export default function ActiveAdvert() {
  const isLogin = useSelector((store) => store.user.user?.id)
  const { id } = useParams()
  const [advert, setAdvert] = useState()
  const [bigPhoto, setBigPhoto] = useState()
  const [visible, setVisible] = useState(false)
  const [arrow, setArrow] = useState('hidden')
  const [favourite, setFavourite] = useState()
  const [notActive, setNotActive] = useState()

  const myAdv = (isLogin === advert?.user?.id)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
      .then((res) => {
        setAdvert(res.data)
        setBigPhoto(res.data.url[0])
      })

    axios.get(`${process.env.REACT_APP_API_URL}add/active/${id}`)
      .then((res) => setNotActive(res.status === 201))

    axios.post(`${process.env.REACT_APP_API_URL}add/favorite/check`, { id: +id, isLogin })
      .then((res) => setFavourite(res.status === 200))

  }, [id, isLogin])

  const onNext = () => {
    const res = advert.url.findIndex((el) => el === bigPhoto)
    if (advert.url[res + 1]) {
      setBigPhoto(advert.url[res + 1])
    } else {
      setArrow(false)
      console.log(arrow);
    }
  }

  const onLast = () => {
    const res = advert.url.findIndex((el) => el === bigPhoto)
    if (advert.url[res - 1]) {
      setBigPhoto(advert.url[res - 1])
    }
  }

  const isFavourite = () => {
    axios.post(`${process.env.REACT_APP_API_URL}add/favorite`, { id: +id, isLogin })
      .then((res) => setFavourite(res.status === 200))
  }

  return (
    <div>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <div onClick={onLast} style={{ background: 'white', width: '20px', height: '20px' }}></div>
        <img src={`${process.env.REACT_APP_API_URL}${bigPhoto}`} width={500} alt="main" />
        <div onClick={onNext} style={{ background: 'white', width: '20px', height: '20px' }}></div>
      </Modal>
      <div className={style.center}>

        <div className={style.zaglushka}></div>

        <div className={style.centerContent}>
          <div className={style.photo}>
            <div className={style.title}>
              <div>
                {favourite ?
                  <img src={`${process.env.REACT_APP_API_URL}icon/favoriteOn.png`} onClick={isFavourite} width={40} alt="" />
                  :
                  <img src={`${process.env.REACT_APP_API_URL}icon/favoriteOff.png`} onClick={isFavourite} width={40} alt="" />
                }
              </div>
              <div className={style.miniZaglushka}></div>
              <h1>{advert?.title}</h1>
            </div>
            <div className={style.bigPhoto}>
              <img src={`${process.env.REACT_APP_API_URL}${bigPhoto}`} onClick={() => setVisible(true)} className={style.bigPhotoImg} alt="main" />
            </div>

            <div className={style.miniPhoto}>
              {advert?.url?.map((el, i) => <img key={i} src={`${process.env.REACT_APP_API_URL}${el}`} onClick={() => setBigPhoto(el)} className={style.miniPhotoImg} alt="mini" />)}
            </div>

          </div>

          <div className={style.contact}>
            {
              <>
                <div>
                  <h1>{advert?.user?.firstName} {advert?.user?.lastName}</h1>
                  <h3>тел. {advert?.user?.phone}</h3>
                </div>
                <Link to={`/exchange/${id}`}>
                  <button type="button" className="btn btn-outline-success">Совершить сделку</button>
                </Link>
                <Link to={`/profile/outgoingDeals`}>
                  <button type="button" className="btn btn-outline-danger">Отменить предложение</button>
                </Link>
              </>
            }
            <div className={style.description}>
              <h3>Описание</h3>
              <p>{advert?.description || 'описание отсутствует'}</p>
            </div>

            <div className={style.exchange}>
              {advert?.exchange ?
                <>
                  <h3>Желаемый обмен</h3>
                  <p>{advert?.exchange}</p>
                </>
                : <></>}
            </div>
          </div>
        </div>

        <div className={style.zaglushka}></div>

      </div>
      <br />
      <div>



      </div>


    </div>

  )
}