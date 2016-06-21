angular.module('tm').controller('TransportCtrl', function(TransportSrv){
   this.TransportSrv = TransportSrv;
   this.transport = TransportSrv.create();
   var master = {};

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
         prop: 'customer',
         title: 'Company name',
      }, {
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

   this.resetForm = (form) => {
      this.loading = true;
      this.transport = angular.copy(master);
      console.log(form.$pristine);
      form.$setPristine();
      form.$setUntouched();
      this.loading = false;
   };

   this.reset = () => {
      this.loading = true;

      this.TransportSrv.reset()
         .then((data) => this.transports = data)
         .catch((err) => console.error(err))
         .finally(()=> this.loading = false);
   };


   this.query = () => {
      this.loading = true;
      this.TransportSrv.query()
         .then((data) => this.transports = data)
         .catch()
         .finally(() => this.loading = false);
   };
   this.query();


   this.add = (transport) => {
      transport.$save()
         .then()
         .catch()
         .finally();
   };

   this.setStatus = (transport) => {
      this.loading = true;
      transport.$setStatus()
         .then(data => this.query())
         .then(data => this.transports = data)
         .catch(err => console.error(err))
         .finally(() => this.loading = false);
   };


});
