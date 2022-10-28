
import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home  from "./fkm-app/pages/home/Home";
import Login  from './fkm-app/pages/userAuth/login/Login';
import Header from './fkm-app/component/main/header/Header';
import SignUp from './fkm-app/pages/userAuth/signUp/SignUp';
import ForgotPassword from './fkm-app/pages/userAuth/forgotPassword/ForgotPassword';
import EnterOtp from './fkm-app/pages/userAuth/enterOtp/EnterOtp';
import ResetPassword from './fkm-app/pages/userAuth/resetPassword/ResetPassword';
import DealDetails from './fkm-app/pages/Deals/DealDetails';
import Error from './fkm-app/pages/errorPage/Error';



function App() {
 
  return (
  <Container maxWidth="sm" sx={{p:"0px"}}>
    <BrowserRouter>
    <Header  />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/enter-otp' element={<EnterOtp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path= "/deal-details/:producId" element={<DealDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  </Container>
  );
}

export default App;
