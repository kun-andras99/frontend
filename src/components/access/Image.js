import React from "react";

function Image(props) {
    return <img className={props.cls} src={props.src} alt={props.alt} title={props.title} />
}

export default Image;