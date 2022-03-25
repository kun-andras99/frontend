import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../constans/constans";

function Links(props) {
    console.log(props);
    return (
        <li className="mobile-menu-item">
            <span role="button"><img className="mobile-menu-icon" src={BASE_URL + `/assets/img/icons/${props.icon}-icon.png`} /></span>
            <ul className="home-menu-container">
                <li key={props.id}>
                <section className="mm">
                    {props.discord ? <a href={props.discord} target="_blank">Discord</a> : ''}
                    {props.items.map((item) =>
                        {props.links.map((link) =>
                            <Link to={`${link}`} onClick={props.hide}>{item}</Link>
                        )}
                    )}
                </section>
                </li>
            </ul>
        </li>
    );
}

export default Links;