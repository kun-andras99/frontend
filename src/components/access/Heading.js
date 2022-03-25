import React from "react";
import { Outlet } from "react-router-dom";

function Heading(props) {
    return <> 
        <h1>{ props.children }</h1>
        <Outlet />
    </>
}

export default Heading;