angular.module('tm').controller('TransportCtrl', function(TransportSrv){
   this.TransportSrv = TransportSrv;

   this.showOptions = [{
         prop: 'all',
         title: 'All',
      },{
         prop: 'progress',
         title: 'In progress',
      },{
         prop: 'archived',
         title: 'Archived',
      },];

   this.orderOptions = [ {
         prop: 'dateLoad',
         title: 'Date',
      },{
         prop: 'weight',
         title: 'Weight',
      },{
         prop: 'cost',
         title: 'Cost',
      },];

   this.minDate = new Date(2016, 5, 17);
   this.filterPredicate = function(date) {
      var day = date.getDay();
      return day !== 0 && day !== 6;
   };
});