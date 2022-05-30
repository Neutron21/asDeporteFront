import React from 'react';
import { AppContext } from '../../context';
import './pendButton.css';


function PendButton() {
    
    const { switchFilter, filterList } = React.useContext(AppContext);
    const [textButton, setTextButton] = React.useState('Pendientes');
   
    const switchItems = () => {
        
        switchFilter();
        console.log(filterList);
        let texto = filterList ? 'Pendientes' : 'Todos';
        setTextButton(texto);
    }
    return (
        <button className='btn sort-btn' onClick={switchItems}>
            {textButton}
        </button>
    );
}

export { PendButton };