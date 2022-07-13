import './App.css';


import { Route, Routes } from 'react-router-dom'
import { Registration, Auth, Navbar, Footer, Faq, Main } from './components';
// import { useEffect } from 'react';
import AddAdvertisement from './components/AddAdvertisement/AddAdvertisement';
import Profile from './components/Profile/Profile';
import AllCategories from './components/AllCategories/AllCategories';
import OneCategory from './components/OneCategory/OneCategory';
import Account from './components/Profile/Account/Account';
import MyAdvertisements from './components/Profile/MyAdvertisements/MyAdvertisements';
import MyApplications from './components/Profile/MyApplications/MyApplications';
import Favourites from './components/Profile/Favourites/Favourites';
import Messages from './components/Profile/Messages/Messages';


function App() {

  //useEffect() проверка на сервере есть ли пользователь в сессии 

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Auth />} />
          <Route path="faq" element={<Faq />} />
          <Route path="category">
            <Route path="" element={<AllCategories />} />
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
