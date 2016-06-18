module.exports = () => {

   var transports = require('./transports').slice();

   function query(req, res) {
      console.log('list action');
      res.status(200).send(transports);
   }

   function save(req, res){
      console.log("save action");
      res.status(201).send("body: " + req.body.name);
   }

   function archive(req, res){
      console.log('archive action');
   }



   return {
      query: query,
      save: save,
      archive: archive,
   };
};