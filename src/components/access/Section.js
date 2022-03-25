import React from "react";
import { Outlet } from "react-router-dom";

function Section(props) {
    return <>
        <section className={ props.cls }>
            { props.children }
        </section>
        <Outlet />
    </>
}

export default Section;