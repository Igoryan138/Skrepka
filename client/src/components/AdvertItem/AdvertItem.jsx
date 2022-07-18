import style from './AdvertItem.module.css'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
// import { useDispatch } from 'react-redux';
// import { selectAdv } from '../../redux/actions/adv.action';

export default function AdvertItem() {
  const { id } = useParams()
  const [advert, setAdvert] = useState()
  const [bigPhoto, setBigPhoto] = useState()
  const [visible, setVisible] = useState(false)
  const [arrow, setArrow] = useState('hidden')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`,)
      .then((res) => {
        setAdvert(res.data)
        setBigPhoto(res.data.url[0])
      })
  }, [id])

  const onNext = () => {
    const res = advert.url.findIndex((el) => el === bigPhoto)
    if (advert.url[res + 1]) {
      setBigPhoto(advert.url[res+1])
    } else { 
      setArrow(false) 
      console.log(arrow);
    }
  }

  const onLast = () => {
    const res = advert.url.findIndex((el) => el === bigPhoto)
    if (advert.url[res - 1]) {
      setBigPhoto(advert.url[res-1])
    }
  }

  return (
    <div>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <div onClick={onLast} style={{background: 'white', width: '20px', height: '20px'}}></div>
        <img src={bigPhoto} width={500} alt="main" />
        <div onClick={onNext} style={{background: 'white', width: '20px', height: '20px'}}></div>
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
          <div>
          <h1>Имя</h1>
          <h1>Телефон</h1>
          </div>
          <button type="button" className="btn btn-primary">Предложить обмен</button>
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
