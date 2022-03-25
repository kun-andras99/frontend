import React, { useCallback, useState } from "react";
import Line from "./mobil-menu/Line";
import MenuContainer from "./mobil-menu/MenuContainer";
import MobileButton from "./mobil-menu/MobileButton";
import MenuContainerLink from "./mobil-menu/MenuContainerLink";
import IconButton from "./mobil-menu/IconButton";
import MenuItem from "./mobil-menu/MenuItem";
import PopupMenu from "./mobil-menu/PopupMenu";
import Menu from "./mobil-menu/Menu";

function MobileMenuContainer() {

    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(openAt => !openAt), [setOpen]);
    const hide = () => setOpen(false);

    return (
        <Menu>
            <PopupMenu open={open}>
                <MenuItem>
                    <IconButton icon="home" />
                    <MenuContainer cls="home">
                        <MenuContainerLink url="/" hide={hide}>Kezdőlap</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Szabályok</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Útmutató</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Kapcsolat</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Oldaltérkép</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="mission" />
                    <MenuContainer cls="mission">
                        <MenuContainerLink url="/" hide={hide}>Akadémia</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Edzés</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Aréna</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>NPC harc</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>PVP harc</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Elem tanulása</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Kage torony</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="hokage" />
                    <MenuContainer cls="hokage">
                        <MenuContainerLink url="/" hide={hide}>Küldetések</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Munkák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Speciális küldetések</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Fejvadászatok</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Kitüntetések</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="city" />
                    <MenuContainer cls="city">
                        <MenuContainerLink url="/" hide={hide}>Küldetések</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Munkák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Speciális küldetések</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Fejvadászatok</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Kitüntetések</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="jutsu" />
                    <MenuContainer cls="jutsu">
                        <MenuContainerLink url="/" hide={hide}>Elsődleges elemi technikák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Másodlagos elemi technikák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Harmadlagos elemi technikák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Egyéb technikák</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Kekkei Genkai</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Vérvonal képességek</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="weapon" />
                    <MenuContainer cls="weapon">
                        <MenuContainerLink url="/" hide={hide}>Fegyverek</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Bábok</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Egyedi felszerelések</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>A Köd Hét Kardja</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Legendás felszerelések</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
                <MenuItem>
                    <IconButton icon="ranklist" />
                    <MenuContainer cls="ranklist">
                        <MenuContainerLink url="/" hide={hide}>Karakterek</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Lakhelyek</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Csapatok</MenuContainerLink>
                        <MenuContainerLink url="/" hide={hide}>Klánok</MenuContainerLink>
                    </MenuContainer>
                </MenuItem>
            </PopupMenu>
            <MobileButton toggle={toggle} open={open}>
                <Line cls="line1" />
                <Line cls="line2" />
            </MobileButton>
        </Menu>
    );
}

export default MobileMenuContainer;