import React from 'react';

import { AppContext } from '../../context';
import { Loading } from '../../components/loading/loading';
import LoginCmp from '../../components/loginCmp/loginCmp';
import Registro from '../../components/register/register';

import './login.css'

function LoginPage() {

    const { loading } = React.useContext(AppContext);
    const [showLogin, setShowLogin] = React.useState(true);
    const [text, setText] = React.useState("No tengo registro");
    
    const switchLogin = () => {
        setShowLogin(!showLogin);
        showTest();
    }
    const showTest = () => {
        let textAux = !showLogin ? "No tengo registro" : "Ya tengo cuenta";
        setText(textAux)
    }

    return ( 
        <section className='login-page'>
            {loading && <Loading/>}
            
            {(!loading && showLogin )&& <LoginCmp/> }
            {(!loading && !showLogin )&& <Registro/> }
            {!loading && 
                <span className='switchText' >
                    <div onClick={switchLogin} className='cursorPointer'> {text} </div>
                </span>
            }
            
        </section>
     );
}

export default LoginPage;