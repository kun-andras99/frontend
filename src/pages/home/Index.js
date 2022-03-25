import React from "react";

import Container from "../../components/access/Container";
import Heading from "../../components/access/Heading";
import Section from "../../components/access/Section";
import Text from "../../components/access/Text";
import Span from "../../components/access/Span";

function Index() {
    return (
    <>
        <Container>
            <Heading>Kezdőlap</Heading>
            <Section cls="mode-content">
                Teteje
                <Text>Komponensekre <Span>osszuk</Span> a tartalmat</Text>
                Alja
            </Section>
        </Container>
    </>
    );
}

export default Index;
