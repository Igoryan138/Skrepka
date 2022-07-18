import style from './AdvertItem.module.css'
import axios from 'axios'
import React from 'react'
import { useSelector } from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
// import { useDispatch } from 'react-redux';
// import { selectAdv } from '../../redux/actions/adv.action';

export default function AdvertItem() {
  const isLogin = useSelector((store) => store.user.user?.id)
  const { id } = useParams()
  const [advert, setAdvert] = useState()
  const [bigPhoto, setBigPhoto] = useState()
  const [visible, setVisible] = useState(false)
  const [arrow, setArrow] = useState('hidden')

  const myAdv = (isLogin === advert?.user?.id)
  console.log(myAdv);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
      .then((res) => {
        setAdvert(res.data)
        setBigPhoto(res.data.url[0])
      })
  }, [id])

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

  return (
    <div>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <div onClick={onLast} style={{ background: 'white', width: '20px', height: '20px' }}></div>
        <img src={bigPhoto} width={500} alt="main" />
        <div onClick={onNext} style={{ background: 'white', width: '20px', height: '20px' }}></div>
      </Modal>
      <div className={style.center}> 0
        <div className={style.photo}> 1
          <div className={style.title}>
            <div>
              Избранное
            </div>
            <h1>{advert?.title}</h1>
          </div>
          <div className={style.bigPhoto}>
            <img src={bigPhoto} onClick={() => setVisible(true)} className={style.bigPhotoImg} alt="main" />
          </div>

          <div className={style.miniPhoto}>
            {advert?.url?.map((el, i) => <img key={i} src={el} onClick={() => setBigPhoto(el)} className={style.miniPhotoImg} alt="mini" />)}
          </div>

        </div>

        <div className={style.contact}>
          <br /><br /><br /><br /><br />
          {myAdv ?
            <h3>Это Ваше объявление. Хотите посмотреть все свои обявления?</h3>
            :
            (isLogin ?
              <>
                <div>
                  <h1>{advert?.user?.firstName} {advert?.user?.lastName}</h1>
                  <h1>тел. {advert?.user?.phone}</h1>
                </div>
                <Link to={`/exchange/${id}`}>
                  <button type="button" className="btn btn-primary">Предложить обмен</button>
                </Link>
              </>
              :
              <>
                <h3>
                  Если вы хотите предложить обмен на этот товар, пожалуйста, пройдите авторизацию
                </h3>
                <Link to={'/registration'} >
                  <button type="button" className="btn btn-primary">Зарегистрироваться</button>
                </Link>
                <br />
                <Link to={'/login'} >
                  <button type="button" className="btn btn-success">Войти</button>
                </Link>
              </>)
          }
        </div>
      </div>
      <br />
      <div className={style.description}>
        <p>Описание: {advert?.description || 'описание отсутствует'}</p>
      </div>

      <div className={style.exchange}>
        <p>Желаемый обмен на: {advert?.exchange || 'нет предпочтений'}</p>

      </div>
    </div>

  )
}
