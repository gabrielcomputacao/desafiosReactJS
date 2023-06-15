
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true, unique: true },
})


/* se ja tiver ele importa se nao tiver ele cria um model chamado user com esse schema feito de nome e email */
module.exports =  mongoose.models.User || mongoose.model('User' , UserSchema)