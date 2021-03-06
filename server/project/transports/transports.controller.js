module.exports = () => {

   var Transport = require('./transports.model');
   var resetList = require('./transports');

   function archive(req, res){

      req.checkParams('id').isMongoId();

      if(req.validationErrors()) return res.status(400).send('Invalid input');

      Transport.findByIdAndUpdate(req.params.id, {archived: true})
         .then((data) => res.status(200).send(data))
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   function getById(req, res){
      req.checkParams('id').isMongoId();

      if(req.validationErrors()) return res.status(400).send('Invalid input');
      Transport.findById(req.params.id).exec()
         .then((data)=> res.status(200).send(data))
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   function reset(req, res){
      Transport.remove()
      .then(data => Transport.create(resetList))
      .then(transports => res.status(201).send(transports))
      .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   function save(req, res){

      req.checkBody('customer').isLength({min: 1});
      req.checkBody('start').isLength({min: 1});
      req.checkBody('destination').isLength({min: 1});
      req.checkBody('placeLoad').isLength({min: 1});
      req.checkBody('placeUnload').isLength({min: 1});
      req.checkBody('dateLoad').isDate();
      req.checkBody('dateUnload').isDate();
      req.checkBody('weight').isNumeric();
      req.checkBody('cost').isNumeric();

      if(req.validationErrors()) return res.status(400).send('Invalid values');

      Transport.create(req.body)
         .then(() => res.status(201).send('Transport created successfully'))
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   function query(req, res) {
      Transport.find().exec()
         .then(transport => res.status(200).json(transport))
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   function update(req, res){
      req.checkBody('customer').isLength({min: 1});
      req.checkBody('start').isLength({min: 1});
      req.checkBody('destination').isLength({min: 1});
      req.checkBody('placeLoad').isLength({min: 1});
      req.checkBody('placeUnload').isLength({min: 1});
      req.checkBody('dateLoad').isDate();
      req.checkBody('dateUnload').isDate();
      req.checkBody('weight').isNumeric();
      req.checkBody('cost').isNumeric();

      if(req.validationErrors()) return res.status(400).send('Invalid values');

      Transport.findByIdAndUpdate(req.params.id, req.body)
         .then(() => {res.status(202).send('Transport updated successfully')})
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.error(err);
         });
   }

   return {
      archive: archive,
      getById: getById,
      reset: reset,
      save: save,
      query: query,
      update: update,
   };
};