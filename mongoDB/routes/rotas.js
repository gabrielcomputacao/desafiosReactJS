const express = require('express');

const rotas = express.Router();


rotas.get('/' , (req,res) =>{
    res.send('primeira rota');
})

rotas.get('/animal/:idbixo' , (req,res)=>{

    const bixo = req.params.idbixo;
    res.json({
        nome : 'teste',
        animal: bixo
    })

})

module.exports = rotas