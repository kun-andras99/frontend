import React from "react";
import { Outlet } from "react-router-dom";
import AuthLinks from "../components/bottom/AuthLinks";
import MobileMenuContainer from "../components/bottom/MobileMenuContainer";
// import Toggle from "../components/bottom/mode/Toggle";
import Header from "../components/site/Header";

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <MobileMenuContainer />
            <AuthLinks />
            {/* <Toggle /> */}
            <Outlet />
        </>
    );
}

export default Layout;