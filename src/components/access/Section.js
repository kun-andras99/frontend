import React from "react";

function Section(props) {
    return ( 
        <section className={ props.cls }>
            { props.children }
        </section>
    );
}

export default Section;