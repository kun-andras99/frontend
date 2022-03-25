import React, { useCallback, useState } from "react";

function MobileMenuContainer(props) {

    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(openAt => !openAt), [setOpen]);
    const hide = () => setOpen(false);

    return <p>menu</p>
}

export default MobileMenuContainer;