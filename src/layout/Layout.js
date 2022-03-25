import React from "react";
import { Outlet } from "react-router-dom";
import MobileMenuContainer from "../components/bottom/MobileMenuContainer";
import Header from "../components/site/Header";

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <MobileMenuContainer />
            <Outlet />
        </>
    );
}

export default Layout;