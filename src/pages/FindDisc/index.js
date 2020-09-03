import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import Menu from './menu';
import { FiHexagon } from 'react-icons/fi';
import { Navbar } from 'bootstrap-4-react';
import './styles.css';

function FindDisc() {

    const discriminator = localStorage.getItem('discriminator');

    return (
        <Container>
            <Row className="container-row">
                <Col col="3"><Menu /></Col>
                <Col>
                    <Navbar light bg="light">
                        <Navbar.Brand className="title-perfil"><FiHexagon color="#016aff" size="50" /><br/><b>Hey</b>, usuário
                        <br/> <h3 className="descrim-disc">aqui está seu <b>discriminator</b> para você se indentificar.</h3>
                          <h1 className="discrim-l">{discriminator}</h1>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default FindDisc;