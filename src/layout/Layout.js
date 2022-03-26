import React from "react";
import { Outlet } from "react-router-dom";
import AuthLinks from "../components/bottom/AuthLinks";
import MobileMenuContainer from "../components/bottom/MobileMenuContainer";
import ToggleMode from "../components/bottom/ToggleMode";
import Header from "../components/site/Header";

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <MobileMenuContainer />
            <AuthLinks />
            <ToggleMode />
            <Outlet />
        </>
    );
}

export default Layout;