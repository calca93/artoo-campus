angular.module('tm').service('TransportSrv', function(){
   var transports = [
      {
         id: '01',
         customer: 'Company A',
         start: 'Company B',
         destination: 'Company Z',
         placeLoad: 'Recanati, via ugo foscolo 4',
         placeUnload: 'Ancona, piazza del popolo',
         dateLoad: '23/05/2016',
         dateUnload: '25/05/2016',
         weight: 30,
         cost: 2000,
         archived: false,
      }, {
         id: '03',
         customer: 'Company B',
         start: 'Company B',
         destination: 'Company Z',
         placeLoad: 'Montecassiano, via ugo foscolo 4',
         placeUnload: 'Macerata, via ugo foscolo 4',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weight: 510,
         cost: 300,
         archived: false,
      },{
         id: '04',
         customer: 'Company H',
         start: 'Company B',
         destination: 'Company R',
         placeLoad: 'Montecassiano, via ugo foscolo 4',
         placeUnload: 'Macerata, via ugo foscolo 4',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weight: 150,
         cost: 800,
         archived: false,
      },{
         id: '05',
         customer: 'Company Q',
         start: 'Company J',
         destination: 'Company Z',
         placeLoad: 'Montecassiano, via ugo foscolo 4',
         placeUnload: 'Macerata, via ugo foscolo 4',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weight: 250,
         cost: 700,
         archived: false,
      },{
         id: '06',
         customer: 'Company X',
         start: 'Company D',
         destination: 'Company O',
         placeLoad: 'Montecassiano, via ugo foscolo 4',
         placeUnload: 'Macerata, via ugo foscolo 4',
         dateLoad: '07/02/2016',
         dateUnload: '04/02/2016',
         weight: 10,
         cost: 5000,
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