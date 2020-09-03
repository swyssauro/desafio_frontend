import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import Menu from './menu';
import { FiUser } from 'react-icons/fi';
import { Navbar } from 'bootstrap-4-react';
import LoginForm from '../../components/Login';
import './styles.css';

export default function Login() {
    return (
        <Container>
            <Row className="container-row">
                <Col col="3"><Menu /></Col>
                <Col>
                    <Navbar light bg="light">
                    <Navbar.Brand className="title-perfil"><FiUser color="#016aff" size="50" /><br /><b>Hey</b>
                        <br /> <h3 className="descrim-disc">aqui é um <b>ótimo</b> lugar para você usar uma indentificação.</h3>
                    </Navbar.Brand>
                    </Navbar>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
}