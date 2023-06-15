
let users = [];


function getUsers(){
    return users;
}


function cadastroUser(user){
    console.log(user)
    users.push(user)
    return 'ok'
}

module.exports = {getUsers,cadastroUser};