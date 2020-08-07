const express = require('express'); //estou importando as funcionalidades do express para a variavel express
const cors = require('cors');
const route = require('./routes'); //importa os codigos que vc exportou em outro arquivo

const app = express(); //colocar as funcionalidades nesta variavel

app.use(cors());
app.use(express.json()); // informando a aplicaçao que estamos usando json
app.use(route);


app.listen(3333) //ouvir porta  3333 - ao acessar digito localhost 3333