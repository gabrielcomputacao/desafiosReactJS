
const express = require('express')
const bodyParser = require('body-parser')
const routerUser = require('./controllers/userController')

const api = express()
api.use(bodyParser.json())

const port = 4444;

api.get('/' , (req, res)=>{
        res.send('Amanha vai dar certo, eu vou passar no teste do josimar e entrar para a empresa dele!!EU SOU CAPAZ ')
})

api.use('/user' , routerUser)


api.post('/', (req, res) =>{
    res.json({ eu:'consigo'})
})

api.listen(port, ()=> console.log('conectou com o express'))
