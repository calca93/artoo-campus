angular.module('tm').controller('TransportCtrl', function(TransportSrv){
   this.TransportSrv = TransportSrv;
   this.transport = TransportSrv.create();

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

   var myDate = new Date();
   this.minDate = new Date(
      myDate.getFullYear(),
      myDate.getMonth(),
      myDate.getDate());
   console.info(this.minDate);

   this.filterPredicate = function(date) {
      var day = date.getDay();
      return day !== 0 && day !== 6;
   };

   // this.transportSelected = (transport) => {
   //    this.transport.customer = transport.customer;
   //    console.info(transport);
   // };


   this.query = () => {
      this.TransportSrv.query()
         .then((data) => this.transports = data)
         .catch();
   };
   this.query();


   this.add = (transport) => {
      transport.$save();
   };

   this.setStatus = (transport) => {
      transport.$setStatus()
         .then(data => this.query())
         .then(data => this.transports = data)
         .catch(err => console.error(err));
   };


});
