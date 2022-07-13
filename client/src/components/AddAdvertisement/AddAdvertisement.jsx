import React, { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import axios from 'axios';

export default function AddAdvertisement() {
  const [city, setCity] = useState();
  console.log(city.value);

  const addHandler = (e) => {
    e.preventDefault();
    
    console.log(e.target.input);
  }
  return (
    <div  className='container'>
      <form onSubmit={addHandler}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Выберите категорию товара</label>
          <p>----добавить компонент категории----</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Напишите название:</label>
          <input name='title' className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Добавьте описание:</label>
          <textarea name='description' className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Выберите город:</label>
          <AddressSuggestions token={process.env.REACT_APP_API_KEY} value={city} onChange={setCity}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">На что хотите поменять? (необязательно)</label>
          <input name='exchange' className="form-control" id="exampleFormControlInput1" />
        </div>
        <button type="submit" className="btn btn-success">Разместить</button>
      </form>
    </div>
  )
}
