
const mongo = require('mongodb').MongoClient;

const url = "mongodb+srv://dbUser:user123%40@cluster0.jvoamlm.mongodb.net" ;

mongo.connect(url , (error, bancoManagement) =>{

    if(error) console.log(error);

    const dbo= bancoManagement.db("animais");
    const objeto = { nome: 'amigo' , raca: 'cachorro', porte: 'grande' }
    const colecao = 'dog'; /* nome da tabela no banco de dados é chamada de coleção */

    dbo.collection("dog").insertOne(objeto , (erro, resultado)=>{
        if(erro) throw erro;
        console.log('deu certo!');

        bancoManagement.close();
    });


})
