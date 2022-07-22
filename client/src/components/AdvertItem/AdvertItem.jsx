import style from './AdvertItem.module.css'
import axios from 'axios'
import React from 'react'
import { useSelector } from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function AdvertItem() {
  const isLogin = useSelector((store) => store.user.user?.id)
  const { id } = useParams()
  const [advert, setAdvert] = useState()
  const [bigPhoto, setBigPhoto] = useState()
  const [visible, setVisible] = useState(false)
  const [arrow, setArrow] = useState('hidden')
  const [favourite, setFavourite] = useState()
  const [notActive, setNotActive] = useState()
  const [edit, setEdit] = useState(false)

  const myAdv = (isLogin === advert?.user?.id)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
      .then((res) => {
        // console.log('useEffect', res.data);
        setAdvert(res.data)
        setBigPhoto(res.data.url[0])
      })

    axios.get(`${process.env.REACT_APP_API_URL}add/active/${id}`)
      .then((res) => setNotActive(res.status === 201))

    axios.post(`${process.env.REACT_APP_API_URL}add/favorite/check`, { id: +id, isLogin })
      .then((res) => setFavourite(res.status === 200))

  }, [id, isLogin])

  const [title, setTitle] = useState(advert?.title)
  const [exchange, setExchange] = useState(advert?.exchange)
  const [description, setDescription] = useState(advert?.description)

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

  const changeValues = () => {
    axios.put(`${process.env.REACT_APP_API_URL}add/change/${id}`, { title, exchange, description })
      .then((res) => {
        console.log('changeValues', res.data);
        setAdvert(res.data)
      })
    setEdit(false)
  }
  // console.log(advert?.description);
  return (
    <div>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <img src={`${process.env.REACT_APP_API_URL}icon/left.png`} onClick={onLast} style={{ width: '30px', height: '50px', margin: '20px' }} alt='' />
        <img onClick={onNext} src={`${process.env.REACT_APP_API_URL}${bigPhoto}`} width={800} alt="main" />
        <img src={`${process.env.REACT_APP_API_URL}icon/right.png`} onClick={onNext} style={{ width: '30px', height: '50px', margin: '20px' }} alt='' />
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
              {edit ?
                <textarea onChange={(e) => setTitle(e.target.value)} required name='description' className="form-control" id="exampleFormControlTextarea1" rows="1" >{advert?.title}</textarea>
                :
                <h1>{advert?.title}</h1>
              }
            </div>
            <div className={style.bigPhoto}>
              <img src={`${process.env.REACT_APP_API_URL}${bigPhoto}`} onClick={() => setVisible(true)} className={style.bigPhotoImg} alt="main" />
            </div>

            <div className={style.miniPhoto}>
              {advert?.url?.map((el, i) => <img key={i} src={`${process.env.REACT_APP_API_URL}${el}`} onClick={() => setBigPhoto(el)} className={style.miniPhotoImg} alt="mini" />)}
            </div>

          </div>

          <div className={style.contact}>
            {notActive ?
              <h3>К сожалению, сделка по этому объявлению уже состоялась.</h3>
              :
              (myAdv ?
                <>
                  {edit ?
                    // <Link to={`/profile/advertisements`} >
                    <button type="submit" onClick={changeValues} className="btn btn-outline-success">Сохранить</button>
                    // </Link>
                    :
                    <>
                      <h3>Это Ваше объявление. <br /> Хотите посмотреть все свои обявления?</h3>
                      <Link to={'/profile/advertisements'} >
                        <button type="button" className={`btn btn-outline-primary ${style.btn}`}>Перейти к моим объявлениям</button>
                      </Link>
                      <button onClick={() => setEdit(true)} type="button" className={`btn btn-outline-warning ${style.btn}`}>Редактировать</button>
                    </>
                  }
                </>
                :
                (isLogin ?
                  <>
                    <div>
                      <h1>{advert?.user?.firstName} {advert?.user?.lastName}</h1>
                      <h3>тел. {advert?.user?.phone}</h3>
                    </div>
                    <Link to={`/exchange/${id}`}>
                      <button type="button" className={`btn btn-primary ${style.btn}`}>Предложить обмен</button>
                    </Link>
                  </>
                  :
                  <>
                    <h3>
                      Если вы хотите предложить обмен на этот товар, пожалуйста, пройдите авторизацию
                    </h3>
                    <Link to={'/registration'} >
                      <button type="button" className={`btn btn-outline-primary  ${style.btn}`}>Зарегистрироваться</button>
                    </Link>
                    <Link to={'/login'} >
                      <button type="button" className={`btn btn-outline-success ${style.btn}`}>Войти</button>
                    </Link>
                  </>))
            }
            <br />
            <div className={style.description}>
              <h3>Описание</h3>
              {edit ?
                <textarea onChange={(e) => setDescription(e.target.value)} name='description' className="form-control" rows="4" >{advert?.description}</textarea>
                :
                <p>{advert?.description || 'описание отсутствует'}</p>
              }
            </div>

            <div className={style.exchange}>
              {advert?.exchange ?
                <>
                  <h3>Желаемый обмен</h3>
                  {edit ?
                    <textarea onChange={(e) => setExchange(e.target.value)} required name='exchange' className="form-control" id="exampleFormControlTextarea1" rows="2" >
                      {advert?.exchange}</textarea>
                    :
                    <p>{advert?.exchange}</p>
                  }
                </>
                : <></>}
            </div>
          </div>

        </div>

        <div className={style.zaglushka}></div>

      </div>
      <br />
    </div>

  )
}
