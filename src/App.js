import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MemberManage from './pages/MemberManage';
import NotFoundpage from './pages/NotFoundpage';
import MemberAdd from './pages/MemberAdd';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from "./pages/TestPage";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/signin" element={<LoginPage />}/>
          <Route path="/manage" element={<MemberManage/>}/>
          <Route path="/add" element={<MemberAdd/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="*" element={<NotFoundpage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

