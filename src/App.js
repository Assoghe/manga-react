import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import { Route, Routes } from 'react-router-dom';
import MangaPage from './components/pages/manga/MangaPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {

  
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/manga/:username" element={<MangaPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  )
}

export default App;
