import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MemberManage from './pages/MemberManage';
import ManagerPay from './pages/ManagerPay';
import EmployeePay from './pages/EmployeePay';
import NotFoundpage from './pages/NotFoundpage';
import MemberAdd from './components/MemberAdd';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from "./pages/TestPage";
import InvoicePage from './pages/InvoicePage';
import InsightPage from './pages/Insightpage';
import Expectpage from './pages/Expectpage';
import StatementPage from './pages/StatementPage';
import MemberModify from './pages/MemberModify';
import MemberDelete from './pages/MemberDelete';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/signin" element={<LoginPage />}/>
          <Route path="/manage" element={<MemberManage/>}/>
          <Route path="/manager" element={<ManagerPay/>}/>
          <Route path="/employee" element={<EmployeePay/>}/>
          <Route path="/add" element={<MemberAdd/>}/>
          <Route path="/modify" element={<MemberModify/>}/>
          <Route path="/delete" element={<MemberDelete/>}/>
          <Route path="/invoice" element={<InvoicePage/>}/>
          <Route path="/insight" element={<InsightPage/>}/>
          <Route path="/expect" element={<Expectpage/>}/>
          <Route path="/statement" element={<StatementPage />}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="*" element={<NotFoundpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

