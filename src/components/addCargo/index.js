import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputGroup } from 'bootstrap-4-react';
import { FiCornerDownRight } from 'react-icons/fi';
import api from '../../services/api';

export default function AddCargo() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salario_cargo, setSalario] = useState('');

    const history = useHistory();
    const discriminatorid = localStorage.getItem('discriminator');

    async function handleAddCargo(e) {
        e.preventDefault();

        const data = { title, description, salario_cargo };
        try {
            await api.post('/cargos', data, {
                headers: {
                    Authorization: discriminatorid,
                }
            })
            history.push('/perfil');
        } catch (err) {
            alert('erro ao cadastrar cargo.')
        }
    }

    return (
        <form onSubmit={handleAddCargo}>
            <InputGroup mb='0'>
                <input placeholder="Title" 
                onChange={e => setTitle(e.target.value)} 
                value={title} className="field-form" 
                />
                <input 
                placeholder="Description" 
                onChange={e => setDescription(e.target.value)} 
                value={description} 
                className="field-form" 
                />
                <input 
                placeholder="Salario" 
                onChange={e => setSalario(e.target.value)} 
                value={salario_cargo} 
                className="field-form" 
                />
            </InputGroup>
            <button className="button-arrow-left" type="submit"><FiCornerDownRight color="#006aff" size="25" /></button>
        </form>
    );
}