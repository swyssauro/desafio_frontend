import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { InputGroup } from 'bootstrap-4-react';
import { FiCornerDownRight } from 'react-icons/fi'
import './styles.css';

export default function App() {

    const [discriminator, discriminator_id] = useState('');
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        await api.post('/session', { discriminator })
            .then(resp => {
                const { data } = resp
                console.log(data);
                if (data) {
                    localStorage.setItem('nome', data.nome);
                    localStorage.setItem('discriminator', discriminator);

                    history.push('/perfil');
                }
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputGroup mb='0'>
                <input placeholder="discriminator" onChange={e => discriminator_id(e.target.value)} value={discriminator} className="field-form" name='discriminator' />
            </InputGroup>
            <button className="button-arrow-left" type="submit"><FiCornerDownRight color="#006aff" size="25" />
            </button>
        </form>
    );
}