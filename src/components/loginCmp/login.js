import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';

function LoginCmp() {

  const { loginEmail, 
          setloginEmail, 
          loginPass, 
          setloginPass,
          loginApp,
          error } = React.useContext(AppContext);
          
    const navigate = useNavigate();
   
    const onChangeEmail = event => {
        setloginEmail(event.target.value)
    }
    const onChangePass = event => {
        setloginPass(event.target.value)
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
            <form onSubmit={validLogin}>
                <h1>Login</h1>

                <label>E-mail</label>
                    <input
                        type="text"
                        className=""
                        placeholder="E-mail"
                        value={loginEmail}
                        onChange={onChangeEmail} 
                        />
                        <label>Password</label>
                    <input
                        type="password"
                        className=""
                        placeholder="Password"
                        value={loginPass}
                        onChange={onChangePass} 
                        />
                <button onClick={validLogin}> Go List</button>
            </form>
        </section>
     );
}

export default LoginCmp
;