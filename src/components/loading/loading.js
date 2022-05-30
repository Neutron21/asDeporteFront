import React from 'react';
import loading from '../../assets/SwingPreloader.gif';
import './loading.css';

function Loading() {
    return (
        <div className='loader-item'>
            <img className='gift-loader' src={loading} alt='loader' />
        </div>
    );
}

export { Loading };