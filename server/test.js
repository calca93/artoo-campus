console.log('ciao from a ' + process.env.NODE_ENV + ' environment');

// (./) path relativo, parte dalla cartella attuale
// path assoluto ricerca per primo nei node-modules
// var myModule = require('./exercises/myModule')({robot: 'Emiglio'});

// console.log(myModule.sayHello('Marco'));


// var http = require('http');

// var server = http.createServer(function (req, res){
//    res.write('<h1>Hello world form server</h1>');
//    res.end();
// });

// server.listen(8080, '0.0.0.0', function(){
//    console.log('My server is up and running');
// });
// $ node server/test.js su console per avviare il server



var express = require('express');

var app = express();

app.get('/', function(req, res){
   // res.send('<h1>Hello from server</h1>');
   res.redirect('/users');
});



// app.get('/users', function(req, res){
//    res.send(404, 'Not found');
//    res.send([{name: 'David', email: 'pippo@pippo.it'}]);
// });

app.get('/reverse/:string', function(req, res){
   var input = req.params.string;
   var output = input.split('').reverse().join('');
   if(req.query.uppercase !== 'false') output = output.toUpperCase();
   if(req.query.spaced) output = output.split('').join(' - ');
   res.send(output);
});

var users = require('./exercises/users');
app.use('/users', users.router);

var items = require('./exercises/items');
app.use('./items', items.router);

app.listen(8080, function(){
   console.log('My server is up and running');
});