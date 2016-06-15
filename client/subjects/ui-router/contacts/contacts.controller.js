angular.module('artoo').controller('ContactsCtrl', function($state, color){
   console.info("contacts controller runs");
   this.config = $state.current.data.config; //access color prop in state data
});