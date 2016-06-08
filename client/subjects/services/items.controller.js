angular.module('artoo').controller('ItemsCtrl', function($scope, ItemsSrv) {

   //ESEGUITA SOLO ALL'AVVIO DEL CONTROLLER
   //$scope.items = ItemsSrv.get();

   //USATA SE NELLA VIEW NECESSITIAMO IL PASSAGGIO DI PARAMETRI
   //$scope.get = ItemsSrv.get;

   //USATA SE NELLA VIEW NECESSITIAMO IL PASSAGGIO DI PARAMETRI
   //USATA ANCHE SE NECESSITIAMO ALTRI METODI O ATTRIBUTI DELL'OGGETTO
   $scope.ItemsSrv = ItemsSrv;

});