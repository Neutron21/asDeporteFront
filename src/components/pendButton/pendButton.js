import React from 'react';
import { AppContext } from '../../context';

import './pendButton.css';


function PendButton() {
    
    const { switchFilter, filterList, showList } = React.useContext(AppContext);
    const [textButton, setTextButton] = React.useState('Pendientes');
   
    const switchItems = () => {
        
        switchFilter();
        console.log(filterList);
        let texto = filterList ? 'Pendientes' : 'Todos';
        setTextButton(texto);
        
    }
    return (
            <button className='btn sort-btn' onClick={switchItems} disabled={!(showList && showList.length > 0)}>
                {textButton}
            </button>
    );
}

export { PendButton };