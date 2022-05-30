import React from "react";
import { AppContext } from "../../context";
import './mainInput.css';

import { FaPlus } from "react-icons/fa";

function MainInput() {

    const { inputValue, setInputValue, addItem } = React.useContext(AppContext);

    const onInputValueChange = event => {
        setInputValue(event.target.value)
    }

    return (
        <section className="MainInput">
            <form onSubmit={addItem}>
                <div className="mb-3 row">
                        <label className="form-label main-label" htmlFor="inputValue">Agrega un producto</label>
                    <div className="col-10 col-md-11">
                        <input
                            id="inputValue"
                            className="form-control"
                            placeholder="Agregar a lista"
                            value={inputValue}
                            onChange={onInputValueChange}
                            maxLength="30"
                        />
                    </div>
                    <div className="col col-xs-1 plus-icon" >
                        <div className="form-icon d-flex justify-content-center">
                            <FaPlus onClick={addItem} />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export { MainInput };