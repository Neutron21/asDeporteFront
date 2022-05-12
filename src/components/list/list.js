
import React from "react";
import './list.css'

function List(props) {
    return(
        <section>
            <ul>{props.children}</ul>
        </section>
    )
}

export {List}