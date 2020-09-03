import React from 'react';
import CargoAdd from '../../components/addCargo';
import Menu from './manu';
import { FiUser } from 'react-icons/fi';
import { Container, Row, Col, Navbar } from 'bootstrap-4-react';

export default function Cargos() {

    const nome = localStorage.getItem('nome');

    return (
        <Container>
            <Row className="container-row">
                <Col col="3">
                <Menu />
                </Col>
                <Col>
                    <Navbar.Brand className="title-perfil"><FiUser color="#016aff" size="50"/><br/><b>Hey</b>, {nome}
                    <br /> <h3 className="descrim-disc">aqui está seu <b>painel</b> para você setar novos cargos.</h3>
                    </Navbar.Brand>
                    <CargoAdd />
                </Col>
            </Row>
        </Container>
    );
}