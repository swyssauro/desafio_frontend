import React, { useState, useEffect } from 'react';
import Menu from './menu';
import { Container, Row, Col, Navbar } from 'bootstrap-4-react';
import { Divider } from 'semantic-ui-react';
import { FiBox } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Explore() {

    const nome = localStorage.getItem('nome');
    const [cargos, setCargos] = useState([]);

    useEffect(() => {
        api.get('/cargos', {
        }).then(response => {
            setCargos(response.data);
        })
    });
    

    return  (
        <>
            <Container>
                <Row className="container-row">
                    <Col col="3">
                    <Menu />
                    </Col>
                    <Col>
                        <Navbar light bg="light">
                        <Navbar.Brand className="title-perfil"><FiBox color="#016aff" size="50" /><br/><b>Hey</b>, {nome || 'usuário'}
                        <br/> <h3 className="descrim-disc">aqui você pode fazer seu <b>comparativos</b> de salários.</h3>
                        </Navbar.Brand>
                        </Navbar>
                        <ul>
                            {cargos.map(cargo => (
                                <li className="list-li">
                                    <strong>Nome <p className="p-second ">nome usuário</p></strong>
                                    <b>{cargo.nome} {cargo.sobrenome}</b>
                                    <Divider/>
                                    <strong>Salário Atual <p className="p-second ">valor salario</p></strong>
                                    <b className="flex-lix ">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cargo.salario_atual)}</b>
                                    <Divider/>
                                    <strong>Cargo <p className="p-second ">nome do cargo</p></strong>
                                    <b>{cargo.title}</b>
                                    <Divider/>
                                    <strong>Descrição <p className="p-second ">descrição do cargo</p></strong>
                                    <b>{cargo.description}</b>
                                    <Divider/>
                                    <strong>Salário <p className="p-second ">ganhos do cargo</p></strong>
                                    <b className="flex-lix ">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cargo.salario_cargo)}</b>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}