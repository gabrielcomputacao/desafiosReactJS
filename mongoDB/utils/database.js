
const mongoose = require('mongoose');

const URI =  "mongodb+srv://gabriel:xVX1OBuJTUjpS7pZ@cluster22.gdv6vnk.mongodb.net/";

const DataBaseConnection = async () =>{

    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI);

        console.log('conectou!')
    }

}

module.exports =  DataBaseConnection


