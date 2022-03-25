import React from "react";
import { Outlet } from "react-router-dom";

function Text(props) {
    return <> 
        <p>{ props.children }</p>
        <Outlet />
    </>
}

export default Text;