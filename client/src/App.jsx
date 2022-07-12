import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';

function App() {
  return (
    <div className="App">
        <Navbar />
      <main>
        <Routes>
          <Route path="/" />
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Auth/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="profile/:id" >
            
          </ Route>
        </Routes>
      </main>
        <Footer />
    </div>
  );
}

export default App;
