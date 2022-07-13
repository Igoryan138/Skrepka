
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Registration, Auth } from './components';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Main from './components/Main/Main';
import AllCategories from './components/AllCategories/AllCategories';
import OneCategory from './components/OneCategory/OneCategory';

function App() {
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
