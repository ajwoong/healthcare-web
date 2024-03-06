'use strict'

const fs = require('fs').promises;

class textstorage{

    static gettexts() {
        return fs.readFile('./databases/texts.json')
        .then((data)=>{
            const texts= JSON.parse(data);
            return texts;
        })
        .catch(console.error);
    }


}

module.exports = textstorage;