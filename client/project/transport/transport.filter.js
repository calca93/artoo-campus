angular.module('tm')
   .filter('typeShow', function(){
      return function (input, archived) {
         if(!input) return;

         if(archived === 'progress')
            return input.filter(transport => transport.archived === false);
         if(archived === 'archived')
            return input.filter(transport => transport.archived === true);
         return input;
   };
});