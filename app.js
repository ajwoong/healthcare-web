const express = require('express');

const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');

const home = require('./routes/home/index.js');

app.use(express.static(`${__dirname}/public`));


app.use(express.json()); // 바디파서가 제이슨 데이터를 파싱해올수 있도록하기
app.use(express.urlencoded({extended: true}));

app.use('/', home);

module.exports = app;