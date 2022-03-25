import React from "react";
import { Link } from "react-router-dom";

function Links(props) {
    const items = ["Link", "Link"];
    return (
        <ul className="mission-menu-container">
            <li>
            <section className="mm">
                {items.map((item) =>
                    <Link to="/" onClick={props.click}>{item}</Link>
                )}
            </section>
            </li>
        </ul>
    );
}

export default Links;