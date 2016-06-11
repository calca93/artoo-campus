angular.module('tm').service('TransportSrv', function(){
   var transports = [
      {
         id: '01',
         customer: 'Company A',
         placeLoad: 'Montecassiano',
         placeUnload: 'Ancona',
         dateLoad: '23/05/2016',
         dateUnload: '25/05/2016',
         weigth: '50',
      },
   ];

   this.get = () => {
      console.info("loaded" + transports);
      return transports;
   };
});