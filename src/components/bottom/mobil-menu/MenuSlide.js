import React from "react";

function MenuSlide(props) {
    return (
        <ul className={props.open ? "mobile-menu-items mobile-menu-items-open" : "mobile-menu-items"}>
            {props.children}
        </ul>
    );
}

export default MenuSlide;