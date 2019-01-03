var express = require('express');
var app = express();
var port = process.env.PORT || 1586;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Message = require('./api/models/msgModel');
var msgdb = 'mongodb://localhost/msgdb';

mongoose.Promise = global.Promise;
mongoose.connect(msgdb, (err) => {
    if(err){
        console.log("Erro ao conectar com o banco");
    }
    console.log("Banco conectado!")
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/msgRoutes');

routes(app);


app.listen(port, () => {
    console.log('Servidor rodando na porta, para enviar as requisicoes: %s', port);
});