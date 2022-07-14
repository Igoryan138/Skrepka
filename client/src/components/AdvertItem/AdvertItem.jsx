import style from './AdvertItem.module.css'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function AdvertItem() {
  const { id } = useParams()
  console.log(id);
  return (
    <div className={style.center}> 0
      <div style={{ 'background-color': 'yellow' }}> 1

        <div className={style.mainPhoto} style={{ 'background-color': 'green' }}>
          <img src="..." className="img-fluid" alt="photo" />
        </div>

        <div className={style.miniPhoto} style={{ 'background-color': 'blue' }}>
          <img src="..." className="rounded mx-auto d-block" alt="miniPhoto" />
        </div>

      </div>
      
      <div>
4
      </div>
    </div>

  )
}
