angular.module('tm').controller('FormCtrl', function(TransportSrv, $stateParams, $state){

   this.TransportSrv = TransportSrv;//ENTRAMBI
   this.transport = TransportSrv.create();//ENTRAMBI

   this.filterPredicate = function(date) {//FORM
      var day = date.getDay();
      return day !== 0 && day !== 6;
   };

   this.resetForm = (form) => {//FORM
      this.loading = true;
      this.transport = {};
      form.$setPristine();
      form.$setUntouched();
      this.loading = false;
   };

   if($stateParams.id){//FORM
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

   this.add = (transport) => {//LIST
      this.loading = true;
      transport.$save()
         .then((data) => {
            $state.go('transports.list');
         })
         .catch(err => console.error(err))
         .finally(() => this.loading = false);
   };
});