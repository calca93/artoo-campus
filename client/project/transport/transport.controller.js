angular.module('tm').controller('TransportCtrl', function(TransportSrv, $stateParams, $state){
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
         title: 'Committant',
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

   this.filterPredicate = function(date) {
      var day = date.getDay();
      return day !== 0 && day !== 6;
   };

   this.resetForm = (form) => {
      this.loading = true;
      this.transport = angular.copy(master);
      form.$setPristine();
      form.$setUntouched();
      this.loading = false;
   };

   if($stateParams.id){
      this.loading = true;
      this.isAnEdit = true;
      TransportSrv.getById($stateParams.id)
         .then((data) => {
            data.dateLoad = new Date(data.dateLoad);
            data.dateUnload = new Date(data.dateUnload);
            this.transport = data;
         })
         .catch((err) => console.error(err))
         .finally(() => this.loading = false);
   }
   else {
      this.isAnEdit = false;
      this.transport = TransportSrv.create();
   }


   //---------------- SERVER ACTIONS -------------------------------------------
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
         .catch((err) => console.error(err))
         .finally(() => this.loading = false);
   };
   this.query();


   this.add = (transport) => {
      this.loading = true;
      transport.$save()
         .then((data) => {
            transport = TransportSrv.create();
            return this.TransportSrv.query();
         })
         .then((data) => {
            this.transports = data;
            $state.go('transports.list');
         })
         .catch(err => console.error(err))
         .finally(() => {
            this.loading = false;
            console.log(transport);
         });
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
