// angular.module('tm', []);
angular.module('tm', [
   'ngMessages',
   'ngAria',
   'ngAnimate',
   'ngMaterial',
])
   .config(($mdThemingProvider) => {
      $mdThemingProvider
         .theme('default')
         .primaryPalette('blue-grey')
         .accentPalette('blue')
         .warnPalette('red')
         .backgroundPalette('grey');
   });