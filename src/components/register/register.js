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
    const [errName, setErrName] = React.useState(false);
    const [errLastName, setErrLastName] = React.useState(false);
    const [errPhone, setErrPhone] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errPass, setErrPass] = React.useState(false);

    const navigate = useNavigate();
    
    const { loginRegister, error } = React.useContext(AppContext);

    const onChangeInput = event => {
        switch (event.target.id) {
            case 'nameRegister':
                setNameRegister(event.target.value);
                setErrName(false);
                break;
            case 'apeidoRegister':
                setApeidoRegister(event.target.value);
                setErrLastName(false);
                break;
            case 'phoneRegister':
                setphoneRegister(event.target.value);
                setErrPhone(false);
                break;
            case 'emailRegister':
                setEmailRegister(event.target.value);
                setErrEmail(false);
                break;
            case 'passwordRegister':
                setPasswordRegister(event.target.value);
                setErrPass(false);
                break;
            default:
                break;
        }
    }
    
    const createUser = async event => {
        event.preventDefault();
        if(noEmpties()){
            let tempBody = {
                name: nameRegister,
                lastname: apeidoRegister,
                email: emailRegister,
                phone: phoneRegister,
                password: passwordRegister
            }
            await loginRegister(tempBody);
            
            if (!error) {
                navigate('yourList');
            }
        }
       
    }
    const noEmpties = () => {

        let allGood = true;
        if (!nameRegister) {
            setErrName(true);
            allGood = false;
        }
        if (!apeidoRegister) {
            setErrLastName(true);
            allGood = false;
        }
        if (!phoneRegister) {
            setErrPhone(true);
            allGood = false;
        }
        if (!emailRegister) {
            setErrEmail(true);
            allGood = false;
        }
        if (!passwordRegister) {
            setErrPass(true);
            allGood = false;
        }

        return allGood;
    }
    return ( 
        <section>
            <form onSubmit={createUser}>
            <h1>Registro</h1>
            <div className="mb-3">
                    <label htmlFor="nameRegister" className="form-label">Nombre(s)</label>
                    <input
                        type="text"
                        className={`form-control caret ${errName && 'inputInvalid'}`}
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
                        className={`form-control caret ${errLastName && 'inputInvalid'}`}
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
                        className={`form-control caret ${errPhone && 'inputInvalid'}`}
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
                        className={`form-control caret ${errEmail && 'inputInvalid'}`}
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
                        className={`form-control caret ${errPass && 'inputInvalid'}`}
                        id="passwordRegister"
                        value={passwordRegister}
                        onChange={onChangeInput}
                        maxLength="12"
                        placeholder="Password" />
            </div>
            <div className='mb-3'>
                <button onClick={createUser} className="blue-300">Registrar</button>
            </div>
            </form>
        </section>
     );
}

export default Registro;