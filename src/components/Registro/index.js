import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { InputGroup } from 'bootstrap-4-react';
import { Formik, Form, Field } from 'formik';
import { FiCornerDownRight } from 'react-icons/fi'
import './styles.css';

export default function App() {

    const history = useHistory();
    const handleSubmit = valores => {
        api.post('/funcionarios', valores)
            .then(resp => {
                const { data } = resp
                console.log(data);
                if (data) {
                    localStorage.setItem('discriminator', data.discriminator);
                    history.push('/welcome');
                }
            });
    }
    return (
        <Formik initialValues={{
            nome: '',
            sobrenome: '',
            data_nascimento: '',
            salario_atual: '',
        }} onSubmit={handleSubmit}>
            <Form>
                <InputGroup mb='0'>
                    <Field placeholder="nome" className="field-form" name='nome' />
                    <Field placeholder="sobrenome" className="field-form" name='sobrenome' />
                </InputGroup>
                <InputGroup mb="3">
                    <Field placeholder="nascimento" type="date" className="field-form" name='data_nascimento' />
                    <Field placeholder="salario" className="field-form" name='salario_atual' />
                </InputGroup>
                <button className="button-arrow-left" type="submit"><FiCornerDownRight color="#006aff" size="25" />
                </button>
            </Form>
        </Formik>
    );
}