import React from "react";

function Menu(props) {
    return (
        <nav className="mobile-menu-fix">
            <nav className="mobile-menu">
                {props.children}
            </nav>
        </nav>
    );
}

export default Menu;