import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { setCategories } from './redux/actions/category.action';
import { Main, Navbar, Footer, Registration, Auth, Faq } from './components';

import AddAdvertisement from './components/AddAdvertisement/AddAdvertisement';
import Profile from './components/Profile/Profile';
import OneCategory from './components/AdvertList/AdvertList';
import Account from './components/Profile/Account/Account';
import MyAdvertisements from './components/Profile/MyAdvertisements/MyAdvertisements';
import MyApplications from './components/Profile/MyApplications/MyApplications';
import Favourites from './components/Profile/Favourites/Favourites';
import Messages from './components/Profile/Messages/Messages';


function App() {
  const dispatch = useDispatch()

  //useEffect() проверка на сервере есть ли пользователь в сессии
  
  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Auth />} />
      <Route path="faq" element={<Faq />} />
      <Route path="category">
        <Route path="" element={<OneCategory />} />
        <Route path=":name" element={<OneCategory />} />
      </Route>
      <Route path='add' element={<AddAdvertisement />} />
      <Route path='profile/*' element={<Profile />} >
        <Route path="account" element={<Account />} />
        <Route path="advertisements" element={<MyAdvertisements />} />
        <Route path="applications" element={<MyApplications />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
