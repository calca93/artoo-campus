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
         archived: false,
      },
   ];

   this.get = () => {
      return transports;
   };

   this.remove = (transport) => {
      console.log(transport)
      transports = transports.filter(singleItem => singleItem.id != transport.id);
   };

   this.archive = (transport) => {
      transports.forEach(function(singleTr){
         if(singleTr.id === transport.id) transports.archive = true;
      });
   };

   this.insert = (transport) => {
      transports.push(transport);
   };
});