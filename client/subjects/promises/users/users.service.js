angular.module('artoo').service('UsersSrv', function($resource){

   var User = $resource('http://jsonplaceholder.typicode.com/:typology/:id', {
      typology: 'users',
   }, {
      retrieve: {
         isArray: true,
         method: 'GET',
         params: {
            typology: 'users',
         },
      }
   });

   this.get = function(params){
      return User.get(params).$promise;
   };

   this.create = () => {
      return new User();
   };

   this.query = function(){
      return User.query().$promise;
   };

});