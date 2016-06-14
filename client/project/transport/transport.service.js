angular.module('tm').service('TransportSrv', function(){
   var transports = [
      {
         id: '01',
         customer: 'Company A',
         start: 'Company B',
         destination: 'Company Z',
         placeLoad: 'Recanati',
         placeUnload: 'Ancona',
         dateLoad: '23/05/2016',
         dateUnload: '25/05/2016',
         weigth: '30',
         cost: '200',
         archived: false,
      }, {
         id: '02',
         customer: 'Company B',
         start: 'Company B',
         destination: 'Company Z',
         placeLoad: 'Montecassiano',
         placeUnload: 'Macerata',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weigth: '50',
         cost: '200',
         archived: false,
      },{
         id: '02',
         customer: 'Company H',
         start: 'Company B',
         destination: 'Company R',
         placeLoad: 'Montecassiano',
         placeUnload: 'Macerata',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weigth: '50',
         cost: '200',
         archived: false,
      },{
         id: '02',
         customer: 'Company Q',
         start: 'Company J',
         destination: 'Company Z',
         placeLoad: 'Montecassiano',
         placeUnload: 'Macerata',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weigth: '50',
         cost: '200',
         archived: false,
      },{
         id: '02',
         customer: 'Company X',
         start: 'Company D',
         destination: 'Company O',
         placeLoad: 'Montecassiano',
         placeUnload: 'Macerata',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weigth: '50',
         cost: '200',
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