angular.module('tm')
   .filter('typeShow', function(){
      return function (input, archived) {
         if(archived === 'progress')
            return input.filter(singleItem => singleItem.archived === false);
         if(archived === 'archived')
            return input.filter(singleItem => singleItem.archived === true);
         return input;
   };
});