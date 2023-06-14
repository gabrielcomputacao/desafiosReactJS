require("dotenv").config();
const mongoose = require('mongoose');

async function connectionMongo() {

    try {

        await mongoose.connect(process.env.URL_Base_Dados, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        /* so faz uma vez  */
        console.log('deu certo a conexao!');

    } catch (erro) {
        console.log(erro)
    }


}








module.exports = connectionMongo;