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
});