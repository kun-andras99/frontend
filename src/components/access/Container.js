import React from "react";

function Container(props) {
    return (
        <main className={ props.cls }>
            { props.children }
        </main>
	);
}

export default Container;