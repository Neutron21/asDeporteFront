import React from 'react';

import { Header } from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import RequireAuth from './components/requireAuth';

function UI() {

    return (
        
            <React.Fragment>
                <Header />
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/yourList' element={ <RequireAuth> <Home/> </RequireAuth>}/>
                </Routes>
                
            </React.Fragment>

    );
}

export default UI;
