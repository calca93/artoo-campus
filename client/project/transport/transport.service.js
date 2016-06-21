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
      update: {
         method: 'PUT',
      },
   });

   this.query = () => {
      return Transports.query().$promise;
   };

   this.create = () => {
      return new Transports();
   };

   this.reset = () => {
      return Transports.reset().$promise;
   };
});