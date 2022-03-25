import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/site/Header";

class Layout extends React.Component {
    render(){
        return <>
            <Header />
            {this.props.children}
            <Outlet />
        </>
    }
}

export default Layout;