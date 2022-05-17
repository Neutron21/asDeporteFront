
import React from "react";
import './item.css';
import { FaTimesCircle } from "react-icons/fa";


function Item(props) {
   
    return(
        <li className="Item">
            
            <label className="label-item">
                <input type='checkbox' className="input-item" onClick={props.onComplete}/>
                <span className="checkbox"></span>
            </label>
            <p className={`Item-p ${props.completed && 'Item-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                <FaTimesCircle/>
            </span>
        </li>
    )
}

export {Item}