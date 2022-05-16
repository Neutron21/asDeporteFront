import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import './register.css'
function Registro() {

    const [nameRegister, setNameRegister] = React.useState('');
    const [apeidoRegister, setApeidoRegister] = React.useState('');
    const [phoneRegister, setphoneRegister] = React.useState('');
    const [emailRegister, setEmailRegister] = React.useState('');
    const [passwordRegister, setPasswordRegister] = React.useState('');
    
    const { loginRegister,
        error } = React.useContext(AppContext);

    
    const onChangeInput = event => {
        switch (event.target.id) {
            case 'nameRegister':
                setNameRegister(event.target.value);
                break;
            case 'apeidoRegister':
                setApeidoRegister(event.target.value);
                break;
            case 'phoneRegister':
                setphoneRegister(event.target.value);
                break;
            case 'emailRegister':
                setEmailRegister(event.target.value);
                break;
            case 'passwordRegister':
                setPasswordRegister(event.target.value);
                break;
            default:
                break;
        }
    }
    const navigate = useNavigate();
    const createUser = event => {
        event.preventDefault();
        let tempBody = {
            name: nameRegister,
            lastname: apeidoRegister,
            email: emailRegister,
            phone: phoneRegister,
            password: passwordRegister
        }
        loginRegister(tempBody);
        if (!error) {
            navigate('yourList');
        }
    }

    return ( 
        <section>
            <form onSubmit={createUser}>
            <h1>Registro</h1>
            <div className="mb-3">
                    <label htmlFor="nameRegister" className="form-label">Nombre(s)</label>
                    <input
                        type="text"
                        className="form-control caret"
                        id="nameRegister"
                        value={nameRegister}
                        onChange={onChangeInput}
                        maxLength="20"
                        placeholder="Nombre(s)" />
            </div>
            <div className="mb-3">
                    <label htmlFor="apeidoRegister" className="form-label">Apeido(s)</label>
                    <input
                        type="text"
                        className="form-control caret"
                        id="apeidoRegister"
                        value={apeidoRegister}
                        onChange={onChangeInput}
                        maxLength="20"
                        placeholder="Apeido(s)" />
            </div>
            <div className="mb-3">
                    <label htmlFor="phoneRegister" className="form-label">Celular</label>
                    <input
                        type="phone"
                        className="form-control caret"
                        id="phoneRegister"
                        value={phoneRegister}
                        onChange={onChangeInput}
                        maxLength="10"
                        placeholder="celular" />
            </div>
            <div className="mb-3">
                    <label htmlFor="emailRegister" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control caret"
                        id="emailRegister"
                        value={emailRegister}
                        onChange={onChangeInput}
                        maxLength="30"
                        placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                    <label htmlFor="passwordRegister" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control caret"
                        id="passwordRegister"
                        value={passwordRegister}
                        onChange={onChangeInput}
                        maxLength="12"
                        placeholder="Password" />
            </div>
            <div className='mb-3'>
                <button onClick={createUser} className="form-control">Registrar</button>
            </div>
            </form>
        </section>
     );
}

export default Registro;