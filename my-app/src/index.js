import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './index.css';
import Login from './Login';
import Register from './Register';
import ForgetPassword from './Forget_Password';
import MainOutlet from './Layout';
import DebtInformation from './Debt_Information';
import Charts from './Charts';
import Friends from './Friends';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path={'www'}> */}
        <Route path={'debt'} element={<Login />} />
        <Route path={'debt/Login'} element={<Login />} />
        <Route path={'debt/Register'} element={<Register />} />
        <Route path={'debt/Forget_Password'} element={<ForgetPassword />} />
        <Route path={'debt'} element={<MainOutlet />}>
          <Route path={'Debt_Information'} element={<DebtInformation />} />
          <Route path={'Charts'} element={<Charts />} />
          <Route path={'Friends'} element={<Friends />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);