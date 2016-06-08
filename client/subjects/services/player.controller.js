angular.module('artoo').controller('PlayerCtrl', function($scope, PlayerSrv) {

   //ESEGUITA SOLO ALL'AVVIO DEL CONTROLLER
   //$scope.items = PlayerSrv.get();

   //USATA SE NELLA VIEW NECESSITIAMO IL PASSAGGIO DI PARAMETRI
   //$scope.get = PlayerSrv.get;

   //USATA SE NELLA VIEW NECESSITIAMO IL PASSAGGIO DI PARAMETRI
   //USATA ANCHE SE NECESSITIAMO ALTRI METODI O ATTRIBUTI DELL'OGGETTO
   $scope.PlayerSrv = PlayerSrv;

});