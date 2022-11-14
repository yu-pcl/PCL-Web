import Header from './components/Header';
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
import PrivateRoute from "./components/PrivateRoute";
import { getCookie } from './pages/Cooke';

function App() {

  const access = getCookie("access_token");
  console.log(access);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/signin" element={<LoginPage />}/>
          <Route path="/manage" element={<PrivateRoute authenticated={access} component={<MemberManage/>} />}/>
          <Route path="/manager" element={<PrivateRoute authenticated={access} component={<ManagerPay/>} />}/>
          <Route path="/employee" element={<PrivateRoute authenticated={access} component={<EmployeePay/>} />} />
          <Route path="/add" element={<PrivateRoute authenticated={access} component={<MemberAdd/>} />} />
          <Route path="/modify" element={<PrivateRoute authenticated={access} component={<MemberModify/>} />} />
          <Route path="/delete" element={<PrivateRoute authenticated={access} component={<MemberDelete/>} />} />
          <Route path="/invoice" element={<PrivateRoute authenticated={access} component={<InvoicePage/>} />} />
          <Route path="/insight" element={<PrivateRoute authenticated={access} component={<InsightPage/>} />} />
          <Route path="/expect" element={<PrivateRoute authenticated={access} component={<Expectpage/>} />} />
          <Route path="/statement" element={<PrivateRoute authenticated={access} component={<StatementPage/>} />} />
          <Route path="/test" element={<TestPage/>}/>
          <Route path="*" element={<PrivateRoute authenticated={access} component={<NotFoundpage/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

