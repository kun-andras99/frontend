import React from "react";

import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Section";

function Index() {
    return <>
        <Container>
            <Heading>Kezdőlap</Heading>
            <Section cls="mode-content">
                Teteje
                <Text>Komponensekre osszuk a tartalmat</Text>
                Alja
            </Section>
        </Container>
    </>
}

export default Index;
