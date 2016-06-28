angular.module('tm').controller('ListCtrl', function(TransportSrv, $state){
    this.TransportSrv = TransportSrv;//ENTRAMBI
    this.transport = TransportSrv.create();//ENTRAMBI

    this.showOptions = [{//LIST
         prop: 'all',
         title: 'All',
      },{
         prop: 'progress',
         title: 'In progress',
      },{
         prop: 'archived',
         title: 'Archived',
      },];

    this.orderOptions = [ {//LIST
         prop: 'customer',
         title: 'Customer',
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

    this.reset = () => {//LIST
      this.loading = true;

      this.TransportSrv.reset()
         .then((data) => this.transports = data)
         .catch((err) => console.error(err))
         .finally(()=> this.loading = false);
   };


   this.query = () => {//LIST
      this.loading = true;
      this.TransportSrv.query()
         .then((data) => this.transports = data)
         .catch((err) => console.error(err))
         .finally(() => this.loading = false);
   };
   this.query();


   this.add = (transport) => {//LIST
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

   this.setStatus = (transport) => {//LIST
      this.loading = true;
      transport.$setStatus()
         .then(data => this.query())
         .then(data => this.transports = data)
         .catch(err => console.error(err))
         .finally(() => this.loading = false);
   };
});