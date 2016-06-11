angular.module('tm').service('TransportSrv', function(){
   var transports = [
      {
         id: '',
         customer: '',
         placeLoad: '',
         placeUnload: '',
         dateLoad: '',
         dateUnload: '',
         weigth: '',
      },
   ];

   this.get = () => {
      return transports;
   };
});