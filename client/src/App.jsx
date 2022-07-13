import './App.css';

import { Route, Routes } from 'react-router-dom'
import { Registration, Auth, Navbar, Footer, Faq, Main } from './components';
import { useEffect } from 'react';

function App() {

  //useEffect() проверка на сервере есть ли пользователь в сессии 

  return (
    <div className="App">
        <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Auth/>} />
          <Route path="faq" element={<Faq/>} />
        </Routes>
      </main>
        <Footer />
    </div>
  );
}

export default App;
