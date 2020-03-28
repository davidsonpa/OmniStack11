import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();   

    async function handleNewIncident(e){
        e.preventDefault();
        const data ={
            title,
            description,
            value
        };

        try{
            const response = await api.post('/incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            });
            console.log(response.data.id);
            history.push('/profile');
    
        } catch(err){
            alert('Erro no cadastro, tente novamente.')
        }
           
    }
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                   <img src={logoImg} alt="Be The Hero"/>
                   <h1>Cadastrar Novo Caso</h1>
                   <p>Descreva o caso detalhadamente para encontrar um Heroi para resolvê-lo.</p>

                   <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> 
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <textarea 
                        placeholder="Detalhamento do Caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <input 
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <button onClick={handleNewIncident} className="button">Inserir</button>

                </form>
            </div>
        </div>

    );
}