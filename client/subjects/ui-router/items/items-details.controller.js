angular.module('artoo').controller('ItemsDetailsCtrl', function($stateParams, ItemsSrv/*item*/){
   this.loading = true;
   this.item = ItemsSrv.getDetails($stateParams.code, (item) => {
      this.item = item;
      this.loading = false;
      console.log(this.loading);
   });
   //this.item = item;
});