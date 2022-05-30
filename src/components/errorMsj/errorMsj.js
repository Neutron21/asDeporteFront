
import React from "react";
import { AppContext } from "../../context";
import './errorMsj.css';

function ErrorMsj() {
    
    const { errorText, setOpenModal} = React.useContext(AppContext);
   
    const closeModal = () => {
        setOpenModal(false);
    }
    return(
        
            <span className="errMsj">
                <div className="mb-3">
                <label className='form-label'> {errorText} </label>
                <button className="form-control" onClick={closeModal}>OK</button>
                </div>
            </span>

    )
}

export { ErrorMsj }