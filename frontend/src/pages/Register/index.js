import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'; //features icon
import './styles.css';
import logoHero from '../../assets/logo.svg';
import api from '../../services/api';


/**
 * 
 * <input placeHolder="UF" style={{width:80}}/> esse style permite que formate o componente usando css javascript
 */


export default function Register()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e)
    {
        e.preventDefault();

        

        const data = 
        {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
            

        try
        {
            const response = await api.post('ongs',data);

            alert(`Seu id de acesso: ${response.data.id}`);
        }
        catch(err)
        {
            console.log(err);    
        }

       history.push('/');
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoHero} ></img>

                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        
                        Voltar ao Logon
                    </Link>

                </section>
                <form onSubmit={handleRegister}>

                    <input placeHolder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}>

                    </input>    

                    <input type="email" placeHolder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                    </input>  

                    <input placeHolder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}>
                    </input>      


                    <div className="input-group">

                        <input placeHolder="Cidade"
                        value={city}
                        onChange={e => setCidade(e.target.value)}>
                        </input>      

                        <input placeHolder="UF" style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}>
                        </input>   

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}