import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom'
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
import SearchResult from './components/SearchResult/SearchResult';
import Exchange from './Exchange/Exchange';
import Success from './components/Success/Success';
import MyCompletedAdvert from './components/Profile/MyAdvertisements/MyCompletedAdvert/MyCompletedAdvert';

function App() {
  const dispatch = useDispatch()
  const id = useSelector((store) => store.user.user?.id)
  const store = useSelector((store) => store)
  // console.log('store=====>',store);
  const isLoaded = useSelector((store) => store.user.isLoaded)
  //  console.log('id=======>',id);
  // ! Получаем список категорий + записываем состояние в стор
  useEffect(() => {
    dispatch(chekUserAuth());
  }, [dispatch])

  // if(!isLoaded){
  //   return 'LOADING...'
  // }

  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="registration" element={id ? <Navigate to='/' /> : <Registration />} />
          <Route path="login" element={id ? <Navigate to='/' /> : <Auth />} />
          <Route path="faq" element={<Faq />} />
          <Route path="category">
            <Route path="" element={<AdvertList />} />
            <Route path=":name" element={<AdvertList />} />
          </Route>
          <Route path="search" element={<SearchResult />} />
          <Route path='add' >
            <Route path='' element={<AddAdvertisement />} />
            <Route path=':id' element={<AdvertItem />} />
          </Route>
          <Route path='profile/*' element={id && <Profile />} >
            <Route path="account" element={<Account />} />
            <Route path="advertisements">
              <Route path='' element={<MyAdvertisements />} />
              <Route path='completed' element={<MyCompletedAdvert />} />
            </Route>
            <Route path="applications" element={<MyApplications />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path='exchange' >
            <Route path=":id" element={id ? <Exchange loginUser={id} /> : <Navigate to='/' />} />
            <Route path="success" element={id && <Success loginUser={id} />} />
          </Route>
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
