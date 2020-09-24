import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Header from "./header";

export default function Layout(props: JSX.ElementChildrenAttribute) {
    return <>
        <Header/>
        <Container>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
    </>;
}