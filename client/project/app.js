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
            controller: '',
            controllerAs: '',
            template: '<div ui-view></div>',
            url: '',
         })

         .state('transports.list', {
            templateUrl: 'project/transport/list/list.html',
            controller: 'ListCtrl',
            controllerAs: 'ListCtrl',
            url: '/',
         })

         .state('transports.add', {
            templateUrl: 'project/transport/form/form.html',
            controller: 'FormCtrl',
            controllerAs: 'FormCtrl',
            url: '/add/:id',
         });

      $urlRouterProvider.otherwise('/');
   });