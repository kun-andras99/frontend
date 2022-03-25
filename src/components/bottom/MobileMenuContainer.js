import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../access/Section";

function MobileMenuContainer(props) {

    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(openAt => !openAt), [setOpen]);
    const hide = () => setOpen(false);

    return <nav className="mobile-menu-fix">
        <nav className="mobile-menu">
        <ul className={open ? "mobile-menu-items mobile-menu-items-open" : "mobile-menu-items"}>
            <li className="mobile-menu-item">
            <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/home-icon.png'} /></span>
            <ul>
                <li>
                <section className="mm">
                    <a href="https://discord.com/invite/sHTTVHvxAv" onClick={hide}>Discord chat</a>
                    <Link to="/" onClick={hide}>Kezdőlap</Link>
                    <Link to="/" onClick={hide}>Szabályok</Link>
                    <Link to="/" onClick={hide}>Útmutató</Link>
                    <Link to="/" onClick={hide}>Kapcsolat</Link>
                    <Link to="/" onClick={hide}>Oldaltékép</Link>
                    <Link to="/" onClick={hide}>Weboldal - Instagram</Link>
                </section>
                </li>
            </ul>
            </li>
            <li className="mobile-menu-item">
            <span role="button"><img className="mobile-menu-icon" src={BASE_URL + '/assets/img/icons/mission-icon.png'} /></span>
            <ul className="mission-menu-container">
                <li>
                <section className="mm">
                    <Link to="/" onClick={hide}>Akadémia</Link>
                    <Link to="/" onClick={hide}>Edzés</Link>
                    <Link to="/" onClick={hide}>Aréna</Link>
                    <Link to="/" onClick={hide}>NPC harc</Link>
                    <Link to="/" onClick={hide}>PVP harc</Link>
                    <Link to="/" onClick={hide}>Elem tanulása</Link>
                    <Link to="/" onClick={hide}>Kage torony</Link>
                </section>
                </li>
            </ul>
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
        <div onClick={toggle} id="mobile-menu-button" className={open ? "hamburger-button-container hamburger-button-container-close" : "hamburger-button-container"}>
            <Section cls="line1" />
            <Section cls="line2" />
        </div>
        </nav>
  </nav>
}

export default MobileMenuContainer;