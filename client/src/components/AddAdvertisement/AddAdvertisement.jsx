import style from './AddAdvertisement.module.css'
import React, { useEffect, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch } from 'react-redux';
import { addAdv } from '../../redux/actions/adv.action';

// import axios from 'axios';

export default function AddAdvertisement() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [exchange, setExchange] = useState('')
  const [city, setCity] = useState();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([])
  // console.log('city' ,city.value);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrls = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls)
  }, [images])

  const fileSelectedHandler = (e) => {
    console.log('fileSelectedHandler', e.target.files);
    setImages([...e.target.files, ...images])
  }

  const addHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    // const newGood = {
    //   title,
    //   description,
    //   exchange,
    //   city: city.value,
    //   photo: images
    // }
    // console.log(newGood);
    dispatch(addAdv(data))
  }

  return (
    <div className='container'>
      <form onSubmit={addHandler}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Выберите категорию товара</label>
          <p>----добавить компонент категории----</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Напишите название:</label>
          <input name='title' onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Добавьте описание:</label>
          <textarea name='description' onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Выберите город:</label>
          <AddressSuggestions token={process.env.REACT_APP_API_KEY} value={city} onChange={setCity} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">На что хотите поменять? (необязательно)</label>
          <input name='exchange' onChange={(e) => setExchange(e.target.value)} className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-file">
          <input name='photo' type="file" multiple accept='image/*' enctype="multipart/form-data" onChange={fileSelectedHandler} className="form-control" />
          {imageURLs.map((imageSrc, i) => (
            <img key={i} src={imageSrc} alt="not fount" className={style.img} />
          ))}
        </div>
        <br />
        <button type="submit" className="btn btn-success">Разместить</button>
      </form>
    </div>
  )
}
