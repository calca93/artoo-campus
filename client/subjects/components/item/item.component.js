angular.module('artoo').component('item', {
   bindings: {
      item: '<data',
      onDelete: '&',
   },
   controller: 'ItemCtrl',
   controllerAs: 'itemCtrl',
   templateUrl: 'subjects/components/item/item.html',
});