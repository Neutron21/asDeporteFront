import React from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {

    const navigate = useNavigate()
    const goList = () => {
        navigate('yourList');
    }

    return ( 
        <section>
            <h1>Registro</h1>
            <label>Nombre</label>
                <input
                    className=""
                    placeholder="Nombre"/>
                    <label>Apeido(s)</label>
                <input
                    className=""
                    placeholder="Apeido(s)"/>
            <label>Num Celular</label>
                <input
                    className=""
                    placeholder="Num Celular"/>    
            <label>E-mail</label>
                <input
                    className=""
                    placeholder="E-mail"/>
                    <label>Password</label>
                <input
                    className=""
                    placeholder="Password"/>
            <button onClick={goList}>Registrar</button>
        </section>
     );
}

export default Registro;