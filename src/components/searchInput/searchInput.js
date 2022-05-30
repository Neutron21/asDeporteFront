import React from 'react';
import { FaSearchengin } from "react-icons/fa";
import { AppContext } from '../../context';
import './searchInput.css'

function SearchInput() {

    const { searchValue, setSearchValue } = React.useContext(AppContext);

    const onSearchValueChange = event => {
        setSearchValue(event.target.value)
        console.log(event.target.value);
    }
    return (
        <section>
            <span>
                <input 
                    class="gate" 
                    id="element" 
                    type="text" 
                    placeholder="Buscar" 
                    value={searchValue}
                    onChange={onSearchValueChange}/>
                <label for="element">
                    <FaSearchengin className='searchIcon'/>
                </label>
      
            </span>
        </section>
    );
}

export { SearchInput };