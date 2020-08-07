/**
 * 
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: alterar informação no backend
  * DELETE: deletar uma informação do backend
  * 
  */

  /***
   * Tipos de paramentros
   * 
   * Query Params: Parametros nomeados enviados na rota após o "?" (serve para filtros, paginacao)
   * ex.:/users?name=Diego retorna apenas o usuários com nome Diego
   * 
   * Route Params: Parametros utilizados para identificar recursos
   * ex.: /users/:id
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */


  //app.get('/users', (request, response) //query params 
  //app.get('/users/:id', (request, response) => //route params
  /*route.post('/ongs', async (request, response) => //request body
  {
  
    //const params = request.query; para acessar query params, fazemos assim
    //const params = request.params; para acessar route params, fazemos assim
    //const data = request.body; //para acessar request body, fazemos assim
    //console.log(data);

    
  
    //  return response.send('hello world'); //retorna a msg hello world no browser
    //outra forma de retornar msg
    
  
  });

  route.get('/ongs', async(request, response) => 
  {
      const ongs = await connection('ongs').select('*'); //equivale a SELECT * FROM ONGS do sql

      return response.json({ongs});
  }); */

const express = require('express');
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const route = express.Router();

route.post('/ongs', ongController.create);
route.get('/ongs', ongController.index);

route.get('/profile', profileController.index);

route.post('/session', sessionController.create);

route.post('/incidents', incidentsController.create);
route.get('/incidents', incidentsController.index);
route.delete('/incidents/:id', incidentsController.delete);


module.exports = route; //esta exportando o arquivo route.js para usar em outro codigo