angular.module('artoo').controller('ItemsCtrl', function($scope, ItemsSrv){
   ItemsSrv.query().then(function(data){
      console.log(data);
   }).catch();

   var newItem = ItemsSrv.create();
   newItem.name = 'Shuriken';

   newItem.$save().then((data) => {
      console.info(data);
   }).catch((err) => {
      console.error(err);
   });
});