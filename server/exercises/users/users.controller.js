module.exports = function(){

   var User = require('./users.model');

   function query(req, res){
      //res.send([{name: 'David', email: 'pippo@pippo.it'}]); db non usato

      User.find().exec()
      .then(users => res.status(200).json(users))
      .catch(err => res.status(500).send('Cannot read users from db ['+ err +']'));
   }

   function save(req, res){
      //Metodo 1
      User.create(req.body).then(()=>{
         res.status(201).send('User successfully addedd');
      }).catch(err => res.status(500).send('Cannot save the user ['+ err +']'));
      return;

      //Metodo 2
      // var newUser = new User(req.body);
      // newUser.save()
      //    .then(()=>{
      //       res.status(201).send('User successfully addedd');
      //    })
      //    .catch(err => res.status(500).send('Cannot save the user ['+ err +']'));
   }

   function remove(req, res){
      User.findByIdAndRemove(req.params.id)
      .then(()=> res.status(200).send('User successfully removed'))
      .catch(err => res.status(500).send('Something went wrong on remove ['+ err +']'));
   }

   function update(req, res){
      //metodo 1
      User.findById(req.params.id).exec()
         .then((user)=>{
            user.name = req.body.name;
            user.surname = req.body.surname;
            return user.save();
         })
         .then(()=> res.status(200).send('User successfully updated'))
         .catch(err => res.status(500).send('Something went wrong on update ['+ err +']'));

      return;

      //Metodo 2 CONSIGLIATO
      User.findByIdAndUpdate(req.params.id, {name: req.body.name, surname: req.body.surname})
         .then(()=> res.status(200).send('User successfully updated'))
         .catch(err => res.status(500).send('Something went wrong on update ['+ err +']'));
   }

   //public API
   return {
      query: query,
      save: save,
      remove: remove,
      update: update,
   };
};