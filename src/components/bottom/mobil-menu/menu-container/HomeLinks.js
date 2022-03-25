import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../constans/constans";

function HomeLinks(props) {

    const items = [
        "Kezdőlap",
        "Szabályok",
        "Útmutató",
        "Kapcsolat",
        "Oldaltérkép",
        "Instagram",
    ];
    
    return (
        <li className="mobile-menu-item">
            <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/home-icon.png'} /></span>
            <ul className="home-menu-container">
                <li>
                <section className="mm">
                    {props.discord ? <a href={props.discord} target="_blank">Discord</a> : ''}
                    {items.map((item) =>
                        <Link to="/" onClick={props.click}>{item}</Link>
                    )}
                </section>
                </li>
            </ul>
        </li>
    );
}

export default HomeLinks;