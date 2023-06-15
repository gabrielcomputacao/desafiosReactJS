
const connection = require('./database')
const model = require('./schema')


const inserir = async ()=>{
    await connection()
}

const createUser = async ()=>{
    await connection();
    const resultado = await model.create({name: 'gabriel' , email: 'louco@'})

    console.log(resultado)
}


createUser();