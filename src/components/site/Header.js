import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return <header>
        <Link to="/">Kezdőlap</Link>
        <Link to="/about-us">Rólunk</Link>
    </header>
}

export default Header;