import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg'

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription ] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        
        
        const data = {
            title,
            description,
            value,
        };
        
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile')

            
        } catch (error) {
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return(
        <div className="new-incident">

            <div className="content">
                <section>
                <img src = {LogoImg} alt="Br the Hero"/>

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para home
                </Link>


                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <input placeholder="Valor em R$"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />

                    <button className="button">Cadastrar</button>

                </form>
            </div>

        </div>
    )
}