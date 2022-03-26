import React from "react";
import { Link } from "react-router-dom";

function MenuLink(props) {
    return (
        <Link to={props.url} onClick={props.hide}>{props.children}</Link>
    )
}

export default MenuLink;