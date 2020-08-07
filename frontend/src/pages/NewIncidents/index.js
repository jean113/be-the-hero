import React, {useState} from 'react'
import logoHero from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NewIncidents()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const ong_id = localStorage.getItem('ongId');

    async function registrar(e)
    {
        e.preventDefault();

        
        const dados = 
        {
            title,
            description,
            value
        };

        try
        {
            console.log("id da ong ", ong_id);
            await api.post('incidents',dados, {headers: { Authorization: ong_id} } );

            alert(`seu incidente foi gravado com sucesso`);
        }
        catch(err)
        {
            console.log(err);    
        }

        

    }


    return(
        <div className="newIncident">
        <div className="content">
            <section>
                <img src={logoHero} ></img>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói  para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>

            </section>
            <form onSubmit={registrar}>

                <input placeHolder="Título do caso" value={title} onChange = {e => setTitle(e.target.value)} />
                <textarea placeholder="Descrição" value={description} onChange = {e => setDescription(e.target.value)}/>
                <input placeHolder="Valor em reais" value={value} onChange = {e => setValue(e.target.value)}/>
                <small>Digite sem o "R$" e apenas vírgula para os centavos.</small>

               
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}