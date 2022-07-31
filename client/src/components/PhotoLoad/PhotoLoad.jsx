import React, { useEffect, useState } from 'react'
import style from './PhotoLoad.module.css'

export default function PhotoLoad() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([])

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrls = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls)
  }, [images])

  const fileSelectedHandler = (e) => {
    setImages([...e.target.files, ...images])
  }
  return (
    <div className="form-file">
      <input type="file" multiple accept='image/*' onChange={fileSelectedHandler}  className="form-control" />
      {imageURLs.map((imageSrc) => (
      <img src={imageSrc} alt="not fount" className={style.img} />
      ))}
    </div>
  )
}
