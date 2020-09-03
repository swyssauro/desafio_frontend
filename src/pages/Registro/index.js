import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import Menu from './menu';
import FormRegistro from '../../components/Registro';
import { Navbar } from 'bootstrap-4-react';
import { FiClipboard } from 'react-icons/fi';
import './styles.css';

export default function Inicial() {
    return (
        <Container>
            <Row className="container-row">
                <Col col="3">
                    <Menu />
                </Col>
                <Col>
                    <Navbar.Brand className="title-perfil"><FiClipboard color="#016aff" size="50" /><br /><b>Hey</b>
                        <br /> <h3 className="descrim-disc">aqui é um <b>ótimo</b> lugar para você criar um indentificação.</h3>
                    </Navbar.Brand>
                    <br /><br />
                    <FormRegistro />
                </Col>
            </Row>
        </Container>
    );
}