import React from "react";

function FixMenu(props) {
    return (
        <nav className="mobile-menu-fix">
            <nav className="mobile-menu">
                {props.children}
            </nav>
        </nav>
    );
}

export default FixMenu;