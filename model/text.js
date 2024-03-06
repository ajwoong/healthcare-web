'use strict'

const textstorage = require('./textstorage.js');
const fs = require('fs').promises;


class text{
    constructor(body){
        this.body=body;
    }

    async new() {
        const newtext = this.body;
        if(newtext.topic === ""){
            return {success:false, msg: '제목을 입력하세요'};
        }
        else if(newtext.article === ""){
            return {success:false, msg: '내용을 입력하세요'};
        }
        const text = await textstorage.gettexts();
        text.topic.push(newtext.topic);
        text.article.push(newtext.article);
        fs.writeFile("./databases/texts.json", JSON.stringify(text))
        return {success:true};
    }

    async show() {
        const text = await textstorage.gettexts();
        return text;
    }

    delete(){
        const deleted_text = this.body;
        fs.writeFile("./databases/texts.json", JSON.stringify(deleted_text))
        return {success:true};
    }

    async update(){
        const text= await textstorage.gettexts();
        const update_text = this.body;
        if(update_text.topic === ""){
            return {success:false, msg: '제목을 입력하세요'};
        }
        else if(update_text.article === ""){
            return {success:false, msg: '내용을 입력하세요'};
        }
        text.topic[update_text.index] = update_text.topic;
        text.article[update_text.index]= update_text.article;
        fs.writeFile("./databases/texts.json", JSON.stringify(text))
        return {success:true};
    }

}


module.exports = text;