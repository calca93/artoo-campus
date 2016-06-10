angular.module('artoo')
   .directive('cssAdder', function(){
      return {
         restrict: 'A',
         scope: {
            // color: '@',
            cssAdder: '=',
            // thickness: '@',
            // typology: '@',
         },
         link: function(scope, elem){
            //console.info(elem);
            var options = scope.cssAdder || {};

            var color = options.color || 'gray';
            var thickness = options.thickness || '1px';
            var typology = options.typology || 'solid';
            elem.css('border', [thickness, typology, color].join(' '));
         },
      };
   });