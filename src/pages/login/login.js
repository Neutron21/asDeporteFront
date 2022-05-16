import React from 'react';

import LoginCmp from '../../components/loginCmp/login';
import Registro from '../../components/register/register';

import './login.css'

function LoginPage() {

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
        <section>
            { showLogin && <LoginCmp/> }
            { !showLogin && <Registro/> }
            <span className='switchText' onClick={switchLogin}>
                 <div className='cursorPointer'> {text} </div>
            </span>
            
        </section>
     );
}

export default LoginPage;