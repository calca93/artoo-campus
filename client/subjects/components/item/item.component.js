angular.module('artoo').component('item', {
   bindings: {
      item: '<data',
   },
   controller: 'ItemCtrl',
   controllerAs: 'itemCtrl',
   templateUrl: 'subjects/components/item/item.html',
});