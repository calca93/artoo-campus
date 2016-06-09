angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
   $scope.ItemsSrv = ItemsSrv;
   var master;

   $scope.selectItem = (code) => {
      $scope.item = angular.copy(ItemsSrv.find(code));
      master = angular.copy($scope.item);
      //$scope.item = JSON.parse(JSON.stringify(ItemsSrv.find(code)));
   };

   $scope.selectedItem = ItemsSrv.get()[0].code;
   $scope.selectItem($scope.selectedItem);

   $scope.insert = function(item, form) {
      //console.info('Send message: ' + text);
      //onsole.info($scope.justAnInput)
      //call the service
      ItemsSrv.add(item);
      $scope.item = {};
      $scope.resetForm(form);
   };

   $scope.update = (item, form) => {
      ItemsSrv.update(item);
      master = angular.copy(item);
   };

   $scope.resetForm = (form) => {
      $scope.item = angular.copy(master);
      // $scope.item = {};
      // form.$setPristine();
   };
});