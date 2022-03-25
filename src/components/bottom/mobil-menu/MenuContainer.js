import React from "react";

function MenuContainer(props) {
    return (
        <ul className={`${props.cls}-menu-container`}>
            <li>
                <section className="mm">
                    {props.children}
                </section>
            </li>
        </ul>
    );
}

export default MenuContainer;