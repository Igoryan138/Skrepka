import style from './AddAdvertisement.module.css'
import React, { useEffect, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAdv } from '../../redux/actions/adv.action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddAdvertisement() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newAdvert, setNewAdvert] = useState({})
  const userId = useSelector((store) => store.user.user?.id)

  // ! Обработчик инпутов
  const inputsHandler = (e) => {
    setNewAdvert(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    formData.append('userId', userId)
    try {
      await axios({
        url: `${process.env.REACT_APP_API_URL}add/new`,
        method: 'POST',
        data: formData,
      })
      navigate('/profile/advertisements')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mt-5 ' >
      <form className={style.form} onSubmit={addHandler} encType="multipart/form-data">
      <img src={`${process.env.REACT_APP_API_URL}icon/addAdv.png`} className={style.imgTitle} alt='' />
        <div className={style.selects}>
          <select required onChange={inputsHandler} name="category" className="form-select h-100 w-25" aria-label="Default select example">
            <option selected disabled>Выберите категорию</option>
            <option value="personals">Личные вещи</option>
            <option value="electronics">Электроника</option>
            <option value="automobile">Авто</option>
            <option value="animals">Животные</option>
            <option value="hobbies">Хобби и отдых</option>
          </select>
          <select required onChange={inputsHandler} name="city" className="form-select h-100 w-25" aria-label="Default select example">
            <option selected disabled>Выберите город</option>
            <option value="Москва">Москва</option>
            <option value="Иркутск">Иркутск</option>
            <option value="Челябинск">Челябинск</option>
            <option value="Саратов">Саратов</option>
            <option value="Анапа">Анапа</option>
          </select>
        </div>
        <div className={`${style.city} mb-3 w-50`}>
          <label htmlFor="exampleFormControlInput1" className="form-label">Напишите название:</label>
          <input required name='title' onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className={`${style.desc} mb-3  w-50`}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Добавьте описание:</label>
          <textarea required name='description' onChange={inputsHandler} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className={`${style.change} mb-3 w-50`}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">На что хотите поменять? (необязательно)</label>
          <input name='exchange' onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-file">
          <input required type="file" multiple name="photo" onChange={inputsHandler} accept="image/*" />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-primary">Разместить</button>
      </form>
    </div>
  )
}
