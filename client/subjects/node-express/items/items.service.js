angular.module('artoo').service('ItemsSrv', function($resource){
   var Items = $resource('/api/items', {}, {});

   // public API
   this.query = () => {
      return Items.query().$promise;
   };

   this.create = () => {
      return new Items();
   };
});