import React from "react";

function MenuItem(props) {
    return (
        <li className="mobile-menu-item">
            {props.children}
        </li>
    );
}

export default MenuItem;