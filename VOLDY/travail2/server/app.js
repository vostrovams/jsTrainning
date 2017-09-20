var express = require('express');
//const ds=require('fs');
var bodyParser = require('body-parser'); //npm install
const ds = require('fs');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//marchera que sile server est lance a partir du dossier parent du client/
//donc faire node server/app.js
app.use(express.static('client/'));

app.get('/countries', function (req, res) {
    console.log('traitement requette GET ...');
    var data = require('./data/data.json')
    res.send(data.countries);
});

app.post('/countries', function (req, res) {
    console.log('Traitement requette POST ...');
    var data = require('./data/data.json');

    this.countries = {};
    this.countries = data.countries;
    this.countries.push(req.body);
    this.data = {};
    this.data['countries'] = countries;
    const f = ds.openSync('server/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))


    res.json(data.countries);//contient la donn�es qu nous avons envoy�
});

app.put('/countries/:id', function (req, res) {
    console.log('Traitement requette PUT ...');
    var data = require('./data/data.json');

    this.countries = {};
    this.countries = data.countries;
    this.countries.splice(req.params.id, 1, req.body);
    this.data = {};
    this.data['countries'] = countries;
    const f = ds.openSync('server/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))

    res.json(/*{ body: req.body, id: req.params.id }*/data.countries);
});

app.delete('/countries/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    var data = require('./data/data.json');

    this.countries = {};
    this.countries = data.countries;
    this.countries.splice(req.params.id, 1);
    this.data = {};
    this.data['countries'] = countries;
    const f = ds.openSync('server/data/data.json', 'w');
    ds.writeFileSync(f, JSON.stringify(data))
    res.send(/*req.params.id*/data.countries);
});

app.listen(3002, () => {
    console.log('le serveur tourne sur le port 3002');
});
