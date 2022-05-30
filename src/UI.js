import React from 'react';
import { AppContext } from './context';
import { Header } from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import { Modal } from './components/Modal/modal';
import LoginPage from './pages/login/login';
import Home from './pages/home/home';
import RequireAuth from './components/requireAuth';
import { ErrorMsj } from './components/errorMsj/errorMsj';

function UI() {

    const { openModal } = React.useContext(AppContext);

    return (

        <React.Fragment>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/yourList' element={<RequireAuth> <Home /> </RequireAuth>} />
                </Routes>
            </div>
            {openModal && 
                <Modal>
                    <ErrorMsj/>
                </Modal>
            }
        </React.Fragment>

    );
}

export default UI;
