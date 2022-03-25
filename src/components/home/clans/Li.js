import React from "react";
import { Link } from "react-router-dom";

function Li(props) {
    return <li className={props.cls}><Link to={props.href}>{props.children}</Link></li>
}

export default Li;