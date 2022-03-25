import React from "react";
import { Outlet } from "react-router-dom";
import MobileMenuContainer from "../components/bottom/MobileMenuContainer";
import Header from "../components/site/Header";

class Layout extends React.Component {
    render(){
        return <>
            <Header />
            {this.props.children}
            <Outlet />
            <MobileMenuContainer />
        </>
    }
}

export default Layout;