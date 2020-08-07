import React, {useState, useEffect} from 'react';
import logoHeroes from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Profile()
{
    const ongName = localStorage.getItem('ongName');
    const ong_id = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

   useEffect(() => {  
       
        
        api.get('profile', {headers: { Authorization: ong_id }} 
    
            ).then(response => {  setIncidents(response.data)   });


    }, [ong_id]);

    async function handleDeleteIncident(id)
    {
        try
        {
            await api.delete(`incidents/${id}`, {headers: { Authorization: ong_id }} );//usar crase(`)
            setIncidents( incidents.filter( incident => incident.id != id) );
        }
        catch(err)
        {
            alert("Erro ao deletar incidente");
        }
    }

    function handleLogout()
    {
        localStorage.clear();
        history.push('/');
    }
   
    return(
        <div className="profile-container">
            
            <header>
                <img src={logoHeroes}/>
                <span>
                    Bem vinda, {ongName}
                </span>

                <Link to="/incidents/new" className="button"> Cadastrar novo caso  </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>

                {
                    /**sem o () => , vc esta retornando o return da funcção e não indicando
                     * ao onClick que deve executar a função ao clicar no botão
                     */
                  incidents.map( incident => 

                    <li key={incident.id}> 

                        <strong>CASO</strong>
                        <p>{incident.title}</p> 

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' } )
                                .format( parseFloat(  incident.value.toString().replace(',','.')  )  ) } </p>
                        
                        <button onClick= { () => handleDeleteIncident(incident.id)} type="button"> 
                            <FiTrash2 size={16} color="#a8a8b3" />
                        </button>

                    </li>  
                  
                  )
                }

            </ul>

        </div>

    );
}