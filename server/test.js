//console.log('ciao from a ' + process.env.NODE_ENV + ' environment');

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



// var express = require('express');

// var app = express();

// app.get('/', function(req, res){
//    // res.send('<h1>Hello from server</h1>');
//    res.redirect('/users');
// });



// app.get('/users', function(req, res){
//    res.send(404, 'Not found');
//    res.send([{name: 'David', email: 'pippo@pippo.it'}]);
// });

// app.get('/reverse/:string', function(req, res){
//    var input = req.params.string;
//    var output = input.split('').reverse().join('');
//    if(req.query.uppercase !== 'false') output = output.toUpperCase();
//    if(req.query.spaced) output = output.split('').join(' - ');
//    res.send(output);
// });

// var users = require('./exercises/users');
// app.use('/users', users.router);

// var items = require('./exercises/items');
// app.use('./items', items.router);

// app.listen(8080, function(){
//    console.log('My server is up and running');
// });

//importazione setting con credenziali dal file nascosto da git
var settings = require('./settings');
//importazione mongoose
var mongoose = require('mongoose');
//importazione della lib bluebird per gestire le promises di mongoose come un server
mongoose.Promise = require('bluebird');

//connsessione al db remoto con logs
mongoose.connect(settings.mongoUrl, function(err){
   if(!err) console.log('1- Connession to database succeded');
   else console.error(err);
});

//instanziamento nuovo schema
var Schema = mongoose.Schema;

//creazione schema
var userSchema = new Schema({
   name: String,
   surname: String,
   birthday: Date,
   updatedAt: Date,
});

//creazione di metodi per lo schema
userSchema.methods.greet = function (name){
   console.log('2- Hello '+ name +' from '+ this.name);
};

userSchema.methods.sayAge = function(){
   var today = new Date();
   var age = today.getFullYear() - this.birthday.getFullYear();
   console.log('3- I am '+ age +' years old');
};

//creazione dei middlewares
//middleware che logga la data di ogni azione
userSchema.pre('save', function(next){
   this.updatedAt = new Date();
   next();
});

//creazione di un modello User basato sullo schema
var User = mongoose.model('User', userSchema);

//uso della classe User per la creazione di bob
var bob = new User({
   name: 'Bob',
   surname: 'Doe',
   birthday: new Date(1984, 12-1, 25),
});

//prova metodi e attributi di bob
console.log('4- '+ bob + '\n' + bob.id);
bob.greet('Anna');
bob.sayAge();

//uso delle promises di bluebird per l'ack del salvataggio
bob.save().then(() => {
   console.log('5- User saved');
}).catch((err) => {
   console.log('5- Error saving the user: '+ err);
});

//dichiarazione della query
//cerca per nome
var query = User.find({name: 'Bob Doe'});

// return stringa vuota []
query = User.find({name: 'Mark'});

// return al primo oggetto che soddisfa la query
query = User.findOne({name: 'Bob'});


//esecuzione della query
query.exec().then((users) => {
   console.info('5- '+ users);
   users.greet('David');
}).catch();

// query che cerca il primo e poi modifica nell esecuzione
var querymod = User.findOne({name: 'Bob Doe'});

//esecuzione della query con promise ritornata
querymod.exec().
   then((user) => {
      user.name = "Bob";
      user.surname = 'Doe';
      return user.save();
   }).then(() => {
      console.info('User updated');
   })
   .catch(err => console.error(err));

// query definita per cancellare il primo oggetto con nome 'John'
// var querydel = User.findOne({name: 'John'});

// querydel.exec()
//    .then((user)=>{
//       return user.remove();
//    })
//    .then(()=>{
//       console.log('Utente rimosso');
//    })
//    .catch((err)=>{
//       console.error(err);
//    });









var express = require('express');
var app = express();

app.listen(8080, function(){
   console.info('6- My server is running');
});