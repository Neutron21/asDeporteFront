
import React from "react";
import './item.css';
import { FaCheck } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function Item(props) {
   
    return(
        <li className="Item">
            
            <span  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props.onComplete}
            >
                <FaCheck/>
            </span>
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