const express = require('express');
const api = express();

/* 
    senha:

    user123@

*/


const rotas = require('./routes/rotas');

api.use('/' , rotas);


api.get('*' , (req, res)=>{
    res.json('rota não encontrada');
})

api.listen('4444' , ()=>{console.log('api escutando, funcionando')})
