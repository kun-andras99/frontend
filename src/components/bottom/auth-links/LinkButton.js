import React from "react";
import { Link } from "react-router-dom";

function LinkButton(props) {
    return (
        <Link to={props.name} className={`${props.name}-btn`}>
            {props.children}
        </Link>
    );
}

export default LinkButton;