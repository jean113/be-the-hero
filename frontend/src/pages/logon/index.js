import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';

import heroesImg from '../../assets/heroes.png';

import logoHero from '../../assets/logo.svg';

import {FiLogIn} from 'react-icons/fi'; //features icon

import api from '../../services/api';

export default function Logon()
{

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e)
    {
        e.preventDefault();

        try
        {
            const response = await api.post('session',{id});
 
            localStorage.setItem('ongId',id );
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        }
        catch(err)
        {
            alert('erro no login');
        }

        
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoHero} alt="Be the Hero"/>   

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Entra com sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}></input>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
