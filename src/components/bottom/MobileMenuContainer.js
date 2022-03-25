import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constans/constans";
import Section from "../access/Section";
import Line from "./mobil-menu/Line";
import HomeLinks from "./mobil-menu/menu-container/HomeLinks";
import Links from "./mobil-menu/menu-container/Links";
import MobileButton from "./mobil-menu/MobileButton";

function MobileMenuContainer() {

    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(openAt => !openAt), [setOpen]);
    const hide = () => setOpen(false);

    const homeItems = [
        "Kezdőlap",
        "Szabályok",
        "Útmutató",
        "Kapcsolat",
        "Oldaltérkép",
        "Instagram",
    ];

    const homeLinks = [
        "",
        "/rules",
        "/",
        "/",
        "/",
        "/",
    ];



    return (
        <nav className="mobile-menu-fix">
            <nav className="mobile-menu">
            <ul className={open ? "mobile-menu-items mobile-menu-items-open" : "mobile-menu-items"}>
                <Links link={homeLinks} icon="home" items={homeItems} click={hide} discord="https://discord.com/invite/sHTTVHvxAv" hide={hide} />
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/mission-icon.png'} /></span>
                {/* <Links click={hide} /> */}
                </li>
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/hokage-icon.png'} /></span>
                <ul className="hokage-menu-container">
                    <li>
                    <section className="mm">
                        <Link to="/" onClick={hide}>Küldetések</Link>
                        <Link to="/" onClick={hide}>Munkák</Link>
                        <Link to="/" onClick={hide}>Speciális küldetések</Link>
                        <Link to="/" onClick={hide}>Fejvadászatok</Link>
                        <Link to="/" onClick={hide}>Kitüntetések</Link>
                    </section>
                    </li>
                </ul>
                </li>
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/city-icon.png'} /></span>
                <ul className="city-menu-container">
                    <li>
                    <section className="mm">
                        <Link to="/" onClick={hide}>Rangok</Link>
                        <Link to="/" onClick={hide}>Kovácsműhely</Link>
                        <Link to="/" onClick={hide}>Kisállatbolt</Link>
                        <Link to="/" onClick={hide}>DNS kereskedés</Link>
                        <Link to="/" onClick={hide}>Bijuuk</Link>
                        <Link to="/" onClick={hide}>Szerencsejáték</Link>
                        <Link to="/" onClick={hide}>Bank</Link>
                    </section>
                    </li>
                </ul>
                </li>
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/jutsu-icon.png'} /></span>
                <ul className="jutsu-menu-container">
                    <li>
                    <section className="mm">
                        <Link to="/" onClick={hide}>Elsődleges elemi technikák</Link>
                        <Link to="/" onClick={hide}>Másodlagos elemi technikák</Link>
                        <Link to="/" onClick={hide}>Harmadlagos elemi technikák</Link>
                        <Link to="/" onClick={hide}>Egyéb technikák</Link>
                        <Link to="/" onClick={hide}>Kekkei Genkai</Link>
                        <Link to="/" onClick={hide}>Vérvonal képességek</Link>
                    </section>
                    </li>
                </ul>
                </li>
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/weapon-icon.png'} /></span>
                <ul className="weapon-menu-container">
                    <li>
                    <section className="mm">
                        <Link to="/" onClick={hide}>Fegyverek</Link>
                        <Link to="/" onClick={hide}>Bábok</Link>
                        <Link to="/" onClick={hide}>Egyedi felszerelések</Link>
                        <Link to="/" onClick={hide}>A Köd Hét Kardja</Link>
                        <Link to="/" onClick={hide}>Legendás felszerelések</Link>
                    </section>
                    </li>
                </ul>
                </li>
                <li className="mobile-menu-item">
                <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/ranklist-icon.png'} /></span>
                <ul className="ranklist-menu-container">
                    <li>
                    <section className="mm">
                        <Link to="/" onClick={hide}>Karakterek</Link>
                        <Link to="/" onClick={hide}>Lakhelyek</Link>
                        <Link to="/" onClick={hide}>Csapatok</Link>
                        <Link to="/" onClick={hide}>Klánok</Link>
                    </section>
                    </li>
                </ul>
                </li>
            </ul>
            <MobileButton toggle={toggle} open={open}>
                <Line cls="line1" />
                <Line cls="line2" />
            </MobileButton>
            </nav>
        </nav>
    );
}

export default MobileMenuContainer;