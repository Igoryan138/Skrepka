import style from './MyOutgoing.module.css'
import axios from 'axios'
import React from 'react'
import { useSelector } from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../../Modal/Modal'


export default function MyOutgoing() {
  const isLogin = useSelector((store) => store.user.user?.id)
  const { id, dealId } = useParams()
  const [advert, setAdvert] = useState()
  const [bigPhoto, setBigPhoto] = useState()
  const [visible, setVisible] = useState(false)
  const [arrow, setArrow] = useState('hidden')
  const [favourite, setFavourite] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
      .then((res) => {
        setAdvert(res.data)
        setBigPhoto(res.data.url[0])
      })

    axios.post(`${process.env.REACT_APP_API_URL}add/favorite/check`, { id: +id, isLogin })
      .then((res) => setFavourite(res.status === 200))

  }, [id, isLogin])

  const cancelDeal = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}deal/outgoing/${dealId}`)
  }

  const onNext = () => {
    const res = advert.url.findIndex((el) => el === bigPhoto)
    if (advert.url[res + 1]) {
      setBigPhoto(advert.url[res + 1])
    } else {
      setArrow(false)
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
        <img src={`${process.env.REACT_APP_API_URL}icon/left.png`} onClick={onLast} style={{ width: '30px', height: '50px', margin: '20px' }} alt='' />
        <img src={`${process.env.REACT_APP_API_URL}${bigPhoto}`} width={800} alt="main" />
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
                  <h3>??????. {advert?.user?.phone}</h3>
                </div>
                <h5>???? ?????? ?????????????????? ???????????? ???? ????????????. <br /> ???????? ??????????????????, ???????? ???????????????? ???????????????? ?? ????????, ???????? ???????????????? ????????????</h5>

              </>
            }
            <div className={style.description}>
              <h3>????????????????</h3>
              <p>{advert?.description || '???????????????? ??????????????????????'}</p>
            </div>

            <div className={style.exchange}>
              {advert?.exchange ?
                <>
                  <h3>???????????????? ??????????</h3>
                  <p>{advert?.exchange}</p>
                </>
                : <></>}
            </div>
            <Link to={`/profile/outgoingDeals`}>
              <button type="button" onClick={cancelDeal} className="btn btn-outline-danger">???????????????? ????????????</button>
            </Link>
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
