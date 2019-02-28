const express = require('express');
const app = express();
const path = require('path');

//Middleware para retornar arquivos estáticos

app.use('/img', express.static('img'));
app.use('/css', express.static('css'));

//Load view engine

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

const rotas = require('../rotas');
rotas(app);

module.exports = app;