import React from "react";
import { Outlet } from "react-router-dom";

function Container(props) {
    return (
        <main className={ props.cls }>
            { props.children }
        </main>
	);
}

export default Container;