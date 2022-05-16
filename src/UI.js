import React from 'react';

import { Header } from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/login';
import Home from './pages/home';
import RequireAuth from './components/requireAuth';

function UI() {

    return (

        <React.Fragment>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/yourList' element={<RequireAuth> <Home /> </RequireAuth>} />
                </Routes>
            </div>

        </React.Fragment>

    );
}

export default UI;
