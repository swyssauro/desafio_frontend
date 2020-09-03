import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from './menu';
import { Container, Row, Col, Navbar, Form } from 'bootstrap-4-react';
import { FiPower, FiTrash2, FiUser } from 'react-icons/fi';
import { Divider } from 'semantic-ui-react'
import './styles.css';
import api from '../../services/api';

export default function Profile() {

    const [cargos, setCargos] = useState([]);
    const discriminatorId = localStorage.getItem('discriminator');
    const nome = localStorage.getItem('nome');
    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: discriminatorId,
            }
        }).then(response => {
            setCargos(response.data);
        })
    }, [discriminatorId]);

    async function handleDeleteCargo(id) {
        try {
            await api.delete(`cargos/${id}`, {
                headers: {
                    Authorization: discriminatorId,
                }
            });

            setCargos(cargos.filter(cargos => cargos.id !== id));
        } catch (err) {
            alert('error ao deletar cargos');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return  (
        <>
            <Container>
                <Row className="container-row">
                    <Col col="3">
                    <Menu />
                    </Col>
                    <Col>
                        <Navbar light bg="light">
                            <Navbar.Brand className="title-perfil" href="#"><FiUser color="#016aff" size="50"/><br/>{nome}</Navbar.Brand>
                            <Form inline my="2 lg-0">
                                <button className="button-ff " onClick={handleLogout} type="button"><FiPower size={25} color="#016aff" /></button>
                            </Form>
                        </Navbar>
                        <ul>
                            {cargos.map(cargo => (
                                <li className="list-li" key={cargo.id}>
                                    <strong>cargo <p className="p-second ">nome do cargo</p></strong>
                                    <p>{cargo.title}</p>
                                    <Divider />
                                    <strong>descrição <p className="p-second ">descrição do cargo</p></strong>
                                    <p>{cargo.description}</p>
                                    <Divider />
                                    <strong>salario <p className="p-second ">ganhos do cargo</p></strong>
                                    <p className="flex-lix ">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cargo.salario_cargo)}
                                    <button type="button" onClick={() => handleDeleteCargo(cargo.id)}><FiTrash2 size={20} color="#016aff" /></button></p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}