angular.module('artoo')
   .filter('price', function() {
      return function (input, currency = true) {
         var output = input.toFixed(0);
         return (currency) ? output + ' gold' : output;
      };
   })

   .filter('availability', function() {
      return function (input) {
         //return parteInt(input) || 'out-of-stock';
         ///////////////////////////////////////////

         return (parseInt(input)) ? input + ' pieces' : 'out-of-stock';
      };
   })

   .filter('races', function() {
      return function(input){
         return input.join(', ') + '.';
      };
   })

   .filter('suitable', function(PlayerSrv){
      var race = PlayerSrv.get().race;
      return function (input) {
         return input.indexOf(race) > -1;
      };
   });