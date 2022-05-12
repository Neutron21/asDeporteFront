import React from "react";
import { AppContext } from "../../context";
import './form.css';

import { FaPlus } from "react-icons/fa";

function Form() {
    
    const { inputValue, setInputValue, addItem } = React.useContext(AppContext);
    
    const onInputValueChange = event => {
        setInputValue(event.target.value)
    }

    return ( 
        <section>
            <form onSubmit={addItem}>
            <p>Agrega un producto</p>
                <input
                    className=""
                    placeholder="Agregar a lista"
                    value={inputValue}
                    onChange={onInputValueChange} 
                    />
                    <FaPlus onClick={addItem}/>
            </form>
        </section>
     );
}

export { Form };