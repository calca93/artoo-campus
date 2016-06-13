angular.module('tm').service('TransportSrv', function(){
   var transports = [
      {
         id: '01',
         customer: 'Company A',
         placeLoad: 'Recanati',
         placeUnload: 'Ancona',
         dateLoad: '23/05/2016',
         dateUnload: '25/05/2016',
         weigth: '30',
         archived: false,
      }, {
         id: '02',
         customer: 'Company B',
         placeLoad: 'Montecassiano',
         placeUnload: 'Macerata',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weigth: '50',
         archived: false,
      },
   ];

   this.get = () => {
      return transports;
   };

   this.remove = (transport) => {
      transports = transports.filter(singleItem => singleItem.id != transport.id);
   };

   this.archive = (transport) => {
      transports.forEach(function(singleTr){
         if(singleTr.id == transport.id)
            transport.archived = true;
      });
   };

   this.insert = (transport) => {
      transports.push(transport);
   };
});