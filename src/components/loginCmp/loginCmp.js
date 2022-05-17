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
    const [novalid, setNovalid] = React.useState(false);

    const navigate = useNavigate();

    const onChangInput = event => {
        
        if ('emailLogin' === event.target.id) {
            setloginEmail(event.target.value)
        } else {
            setloginPass(event.target.value)
        }
    }

    const validLogin = async event => {
        event.preventDefault();
        
            await loginApp();
            console.log('error', error);
            if (!error) {
                navigate('yourList');
            }
        
        
    }
 
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={validLogin}>
                <div className="mb-3">
                    <label htmlFor="emailLogin" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className={`form-control ${novalid && 'inputInvalid'}`}
                        id="emailLogin"
                        value={loginEmail}
                        onChange={onChangInput}
                        placeholder="name@example.com"
                        maxLength="30"
                        required />

                </div>
                <div className="mb-3">
                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${novalid && 'inputInvalid'}`}
                        id="passwordLogin"
                        value={loginPass}
                        onChange={onChangInput}
                        placeholder="password"
                        maxLength="12"
                        required />
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