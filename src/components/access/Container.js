import React from "react";
import { Outlet } from "react-router-dom";

function Container(props) {
    return <>
        <main className={ props.cls }>
            { props.children }
        </main>
        <Outlet />
    </>
}

export default Container;