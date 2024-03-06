'use strict'

const fs = require('fs').promises;

class UserStorage{

    static getUsers() {
        return fs.readFile('./databases/users.json')
        .then((data)=>{
            const users = JSON.parse(data);
            return users;
        })
        .catch(console.error);
    }


}

module.exports = UserStorage;