
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Profile from './components/Profile/Profile';
// import { Registration, Auth } from './components';
// import Navbar from '../components/Navbar/Navbar';
// import Footer from '../components/Footer/Footer';
// import Faq from '../components/Faq/Faq';
// import Main from '../components/Main/Main';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Navbar /> */}
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Main/>}/>
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Auth/>} />
          <Route path="faq" element={<Faq/>} /> */}

        </Routes>
        <Profile />

      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
