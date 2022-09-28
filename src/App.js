import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MemberManage from './pages/MemberManage';
import ManagerPay from './pages/ManagerPay';
import EmployeePay from './pages/EmployeePay';
import NotFoundpage from './pages/NotFoundpage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/signin" element={<LoginPage />}/>
          <Route path="/manage" element={<MemberManage/>}/>
          <Route path="/Manager" element={<ManagerPay/>}/>
          <Route path="/Employee" element={<EmployeePay/>}/>
          <Route path="*" element={<NotFoundpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

