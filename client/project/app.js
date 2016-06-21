// angular.module('tm', []);
angular.module('tm', [
   'ui.router',
   'ngResource',
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
   })
   .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider

         .state('transports', {
            abstract: true,
            controller: 'TransportCtrl',
            controllerAs: 'TransportCtrl',
            template: '<div ui-view></div>',
            url: '',
         })

         .state('transports.list', {
            templateUrl: 'project/transport/list.html',
            url: '/',
         })

         .state('transports.add', {
            templateUrl: 'project/transport/my-form.html',
            controller: 'TransportCtrl',
            controllerAs: 'TransportCtrl',
            url: '/add/:id',
         });

      $urlRouterProvider.otherwise('/');
   });