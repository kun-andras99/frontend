import React from "react";
import { BASE_URL } from "../../../constans/constans";

function IconButton(props) {
    return (
        <span role="button"><img className="mobile-menu-icon" src={BASE_URL + `/assets/img/icons/${props.icon}-icon.png`} /></span>
    );
}

export default IconButton;