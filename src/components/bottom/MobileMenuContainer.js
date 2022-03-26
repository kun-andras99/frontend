import React, { useCallback, useState } from "react";
import ButtonLine from "./mobil-menu/ButtonLine";
import MenuContainer from "./mobil-menu/MenuContainer";
import MobileButton from "./mobil-menu/MobileButton";
import MenuLink from "./mobil-menu/MenuLink";
import MenuItem from "./mobil-menu/MenuItem";
import MenuSlide from "./mobil-menu/MenuSlide";
import FixMenu from "./mobil-menu/FixMenu";

function MobileMenuContainer() {

    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(openAt => !openAt), [setOpen]);
    const hide = () => setOpen(false);

    return (
        <FixMenu>
            <MenuSlide open={open}>
                <MenuItem icon="home">
                    <MenuContainer cls="home">
                        <MenuLink url="/" hide={hide}>Kezdőlap</MenuLink>
                        <MenuLink url="/" hide={hide}>Szabályok</MenuLink>
                        <MenuLink url="/" hide={hide}>Útmutató</MenuLink>
                        <MenuLink url="/" hide={hide}>Kapcsolat</MenuLink>
                        <MenuLink url="/" hide={hide}>Oldaltérkép</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="mission">
                    <MenuContainer cls="mission">
                        <MenuLink url="/" hide={hide}>Akadémia</MenuLink>
                        <MenuLink url="/" hide={hide}>Edzés</MenuLink>
                        <MenuLink url="/" hide={hide}>Aréna</MenuLink>
                        <MenuLink url="/" hide={hide}>NPC harc</MenuLink>
                        <MenuLink url="/" hide={hide}>PVP harc</MenuLink>
                        <MenuLink url="/" hide={hide}>Elem tanulása</MenuLink>
                        <MenuLink url="/" hide={hide}>Kage torony</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="hokage">
                    <MenuContainer cls="hokage">
                        <MenuLink url="/" hide={hide}>Küldetések</MenuLink>
                        <MenuLink url="/" hide={hide}>Munkák</MenuLink>
                        <MenuLink url="/" hide={hide}>Speciális küldetések</MenuLink>
                        <MenuLink url="/" hide={hide}>Fejvadászatok</MenuLink>
                        <MenuLink url="/" hide={hide}>Kitüntetések</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="city">
                    <MenuContainer cls="city">
                        <MenuLink url="/" hide={hide}>Küldetések</MenuLink>
                        <MenuLink url="/" hide={hide}>Munkák</MenuLink>
                        <MenuLink url="/" hide={hide}>Speciális küldetések</MenuLink>
                        <MenuLink url="/" hide={hide}>Fejvadászatok</MenuLink>
                        <MenuLink url="/" hide={hide}>Kitüntetések</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="jutsu">
                    <MenuContainer cls="jutsu">
                        <MenuLink url="/" hide={hide}>Elsődleges elemi technikák</MenuLink>
                        <MenuLink url="/" hide={hide}>Másodlagos elemi technikák</MenuLink>
                        <MenuLink url="/" hide={hide}>Harmadlagos elemi technikák</MenuLink>
                        <MenuLink url="/" hide={hide}>Egyéb technikák</MenuLink>
                        <MenuLink url="/" hide={hide}>Kekkei Genkai</MenuLink>
                        <MenuLink url="/" hide={hide}>Vérvonal képességek</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="weapon">
                    <MenuContainer cls="weapon">
                        <MenuLink url="/" hide={hide}>Fegyverek</MenuLink>
                        <MenuLink url="/" hide={hide}>Bábok</MenuLink>
                        <MenuLink url="/" hide={hide}>Egyedi felszerelések</MenuLink>
                        <MenuLink url="/" hide={hide}>A Köd Hét Kardja</MenuLink>
                        <MenuLink url="/" hide={hide}>Legendás felszerelések</MenuLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem icon="ranklist">
                    <MenuContainer cls="ranklist">
                        <MenuLink url="/" hide={hide}>Karakterek</MenuLink>
                        <MenuLink url="/" hide={hide}>Lakhelyek</MenuLink>
                        <MenuLink url="/" hide={hide}>Csapatok</MenuLink>
                        <MenuLink url="/" hide={hide}>Klánok</MenuLink>
                    </MenuContainer>
                </MenuItem>
            </MenuSlide>
            <MobileButton toggle={toggle} open={open}>
                <ButtonLine cls="line1" />
                <ButtonLine cls="line2" />
            </MobileButton>
        </FixMenu>
    );
}

export default MobileMenuContainer;