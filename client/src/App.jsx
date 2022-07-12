import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';
import Main from '../components/Main/Main';

function App() {
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
