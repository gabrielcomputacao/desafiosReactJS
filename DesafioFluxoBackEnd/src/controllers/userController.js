
const router = require('express').Router();
const userService = require('../services/userService');


router.get('/' , (req, res) =>{
    const usuarios = userService.getUsers();
    res.send(usuarios)
})

router.post('/' , async (req , res)=>{
    const user = req.body;
    const resposta = await userService.cadastroUser(user)
    res.send(resposta)
})

router.delete('/' , (req,user)=>{
    res.send('fazendo delete')
})

module.exports = router;
