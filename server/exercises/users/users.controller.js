module.exports = function(){
   function query(req, res){
      res.send([{name: 'David', email: 'pippo@pippo.it'}]);
   }

   //public API
   return {
      query: query,
   };
};