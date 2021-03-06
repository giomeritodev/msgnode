var express = require('express');
var app = express();
var port = process.env.PORT || 1586;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var msgdb = 'mongodb://localhost/msgdb';

var Message = require('./api/models/msgModel');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect(msgdb, {useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Erro ao conectar com o banco");
    }else{
        console.log("Banco conectado!");
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/msgRoutes');

routes(app);


app.listen(port, () => {
    console.log('Servidor rodando na porta, para enviar as requisicoes: %s', port);
});