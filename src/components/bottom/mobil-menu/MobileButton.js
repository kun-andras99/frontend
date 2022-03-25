import React from "react";

function MobileButton(props) {
    return <div onClick={props.toggle} id="mobile-menu-button" className={props.open ? "hamburger-button-container hamburger-button-container-close" : "hamburger-button-container"}>
        {props.children}
    </div>
}

export default MobileButton;