// create a controller for the items
angular.module('artoo').controller('ItemsCtrl', ($scope) => {
   console.log('ItemsCtrl runs!');

   $scope.item = {
      name: 'Ascia bipenne',
      image: 'http://khazalidgrungron.altervista.org/axes/05.png',
      description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico',
      slots: 3,
   };

   $scope.dispose = () => {
      $scope.item = undefined;
   };

   $scope.toggleDescription = () => {
      $scope.visibleDescription = !$scope.visibleDescription; //Non settandolo è undefined, facendo il not diventa true
   }

   $scope.checkIfFits = (item, bagSize) => {
      return (item.slots <= bagSize);
   };

});

// attach the following data to it

/*
 * Ascia bipenne
 * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
 * Spazio occupato: 3 slots
 * http://khazalidgrungron.altervista.org/axes/05.png
 */

// attach some behaviours to the controller: read-description, check-if-fits, dispose
