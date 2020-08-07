const connection = require('../database/connection');
const crypto =  require('crypto'); //biblioteca para criptografia


module.exports = 
{

    async create(request, response) //funcao
    {

        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');//gera um id criptogrado de letras

        await connection('ongs').insert( //equivale ao INSERT INTO do sql / o await vai fazer o aplicativo aguardar a execução desse comando
        {
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    },

    
    async index(request, response)//funcao
    {
       const ongs = await connection('ongs').select('*'); //equivale a SELECT * FROM ONGS do sql
 
       return response.json(ongs);
    }


};