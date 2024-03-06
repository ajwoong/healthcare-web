'use strict'

const userstorage = require('./Userstorage.js');
const fs = require('fs').promises;


class User{
    constructor(body){
        this.body=body;
    }

    async login(){
        const client = this.body;
        const user= await userstorage.getUsers();
        
        if(user.id.includes(client.id)){
            const idx = user.id.indexOf(client.id);
            if(user.pwd[idx] === client.pwd){
                return {
                    success: true,
                    msg: `${client.id}님 환영합니다`
                };
            }
            else{
                return{
                    success : false,
                    msg: '비밀번호가 틀립니다.',
                }
            }
        }

        return {
            success: false,
            msg: '존재하지 않는 아이디입니다.',
        }


    }

    async register(){
        const newclient = this.body;
        const user = await userstorage.getUsers();
        if(user.id.includes(newclient.id)){
            return {success: false, msg: '이미 존재하는 아이디입니다.'};
        }
        user.id.push(newclient.id);
        user.pwd.push(newclient.pwd);
        fs.writeFile("./databases/users.json", JSON.stringify(user));
        return {success : true, msg : `${newclient.id}님, 가입을 환영합니다.`};

    }


}

module.exports= User;