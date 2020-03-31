
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import api from '../../services/api';
import LogoImg from '../../assets/logo.svg';

 export default function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [wathsapp, setWathsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setuf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            wathsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            window.alert(`Cadastro feito com sucesso!! Anote Seu ID:  ${response.data.id}`);
            history.push('./');
        } catch (error) {
            alert('Erro do cadastro, tente novamente');
        }
    }
            
        return(
            <div className="register-container">
    
                <div className="content">
                    <section>
                    <img src = {LogoImg} alt="Br the Hero"/>
    
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataformae ajude as pessoas a encontrar a sua ONG.</p>
    
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para página de cadastro
                    </Link>
                    </section>
    
                    <form onSubmit={handleRegister}>
                        <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
    
                        <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
    
                        <input placeholder="Wathsapp"
                        value={wathsapp}
                        onChange={e => setWathsapp(e.target.value)}
                        />
    
                        <div className="input-group">
                            <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            />
    
                            <input placeholder="UF" style={{ width:80 }}
                            value={uf}
                            onChange={e => setuf(e.target.value)}
                            />
                        </div>
    
                        <button className="button">Cadastrar</button>
    
                    </form>
                </div>
    
            </div>)
    }

    



