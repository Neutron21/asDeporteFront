import React from "react";
import './list.css'

function List(props) {
    return(
        <section className="d-flex flex-column bd-highlight mb-3">
            <ul className="pc-2 bd-highlight">{props.children}</ul>
        </section>
    )
}

export {List}