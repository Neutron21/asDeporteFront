import React from 'react';

import LoginCmp from '../components/loginCmp/login';
import Registro from '../components/register/register';

function Login() {

    return ( 
        <section>
            <LoginCmp/>
            <Registro/>
           
        </section>
     );
}

export default Login;