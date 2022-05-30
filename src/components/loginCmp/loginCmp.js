import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';

import './loginCmp.css'

function LoginCmp() {

    const { loginEmail,
        setloginEmail,
        loginPass,
        setloginPass,
        loginApp,
        error } = React.useContext(AppContext);
   
    const [errEmail, setErrEmail] = React.useState(false);
    const [errPass, setErrPass] = React.useState(false);
    const navigate = useNavigate();

    const onChangInput = function(event) {
        
        if ('emailLogin' === event.target.id) {
            setErrEmail(false);
            setloginEmail(event.target.value)
            
        } else {
            setErrPass(false)
            setloginPass(event.target.value)
        }
        
    }

    const validLogin = async function(event) {
        
        event.preventDefault();

        if (noEmpties()) {
            await loginApp();
            console.log('error', error);
            if (!error) {
                navigate('yourList');
            }
        }
    }
    const noEmpties = () => {

        let allGood = true;
        if (!loginEmail) {
            setErrEmail(true);
            allGood = false;
        }
        if (!loginPass) {
            setErrPass(true);
            allGood = false;
        }

        return allGood;
    }
 
    return (
        <section>
            
            <h1>Login</h1>
            <form onSubmit={validLogin}>
                <div className="mb-3">
                    <label htmlFor="emailLogin" className="form-label">E-mail</label>
                    
                    <input
                        type="email"
                        className={`form-control ${errEmail && 'inputInvalid'}`}
                        id="emailLogin"
                        value={loginEmail}
                        onChange={onChangInput}
                        placeholder="name@example.com"
                        maxLength="30" />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errPass && 'inputInvalid'}`}
                        id="passwordLogin"
                        value={loginPass}
                        onChange={onChangInput}
                        placeholder="password"
                        maxLength="12" />
                </div>
                <div className="mb-3">
                    <button onClick={validLogin} className="blue-300"> Go List</button>
                </div>
            </form>
        </section>
    );
}

export default LoginCmp
    ;