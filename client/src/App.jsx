import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom'
import { setCategories } from './redux/actions/category.action';
import { Main, Navbar, Footer, Registration, Auth, Faq } from './components';

import AddAdvertisement from './components/AddAdvertisement/AddAdvertisement';
import Profile from './components/Profile/Profile';
import AdvertList from './components/AdvertList/AdvertList';
import Account from './components/Profile/Account/Account';
import MyAdvertisements from './components/Profile/MyAdvertisements/MyAdvertisements';
import MyApplications from './components/Profile/MyApplications/MyApplications';
import Favourites from './components/Profile/Favourites/Favourites';
import Messages from './components/Profile/Messages/Messages';
import AdvertItem from './components/AdvertItem/AdvertItem';
import { chekUserAuth } from './redux/actions/user.action';


function App() {
  const dispatch = useDispatch()

  const id = useSelector((store) => store.user.id )

  //useEffect() проверка на сервере есть ли пользователь в сессии

  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(setCategories())
    dispatch(chekUserAuth());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="registration" element={ id ? <Navigate to='/'/> : <Registration />} />
        <Route path="login" element={id ? <Navigate to='/'/> :<Auth />} />
        <Route path="faq" element={<Faq />} />
        <Route path="category">
          <Route path="" element={<AdvertList />} />
          <Route path=":name" element={<AdvertList />} />
        </Route>
        <Route path='add' >
          <Route path='' element={<AddAdvertisement />} />
          <Route path=':id' element={<AdvertItem />} />
        </Route>
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
