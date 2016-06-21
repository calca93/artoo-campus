angular.module('tm').service('TransportSrv', function($resource){

   var Transports = $resource('/api/transports/:action/:id', {
      id: '@_id'
   }, {
      reset: {
         isArray: true,
         method: 'GET',
         params: {
            action: 'reset',
         },
      },
      setStatus: {
         method: 'PUT',
         params: {
           action: 'archive',
         },
      },
   });

   this.create = () => {
      return new Transports();
   };

   this.getById = (id) => {
      return Transports.get({id: id}).$promise;
   };

   this.query = () => {
      return Transports.query().$promise;
   };

   this.reset = () => {
      return Transports.reset().$promise;
   };

   this.update = () => {
      return Transports.update().$promise;
   };

});