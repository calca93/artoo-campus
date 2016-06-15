angular.module('artoo', [
      'appbar',
      'ui.router',
   ])

   .config((AppbarSrvProvider) => {
      AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
   })

   .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
         .state('home', {
            controller: function(){
               console.log('im in home');
            },
            template: '<h1>Home</h1>',
            url: '/',
         })
         .state('items', {
            controller: 'ItemsCtrl',
            controllerAs: 'ItemsCtrl',
            templateUrl: 'subjects/ui-router/items/items.html',
            url: '/items',
         })

         .state('items-details', {
            controller: 'ItemsDetailsCtrl',
            controllerAs: 'ItemsDetailsCtrl',
            templateUrl: 'subjects/ui-router/items/items-details.html',
            url: '/item/:code',
            // resolve: {
            //    item: function($stateParams, ItemsSrv) {
            //       return ItemsSrv.getDetails($stateParams.code);
            //    },
            // },
            // onEnter: function($state, item){
            //    if(!item) $state.go('items');
            // },
         })

         .state('contacts', {
            abstract: true,
            controller: 'ContactsCtrl',
            controllerAs: 'contactsCtrl',
            data: {
               config: {
                  color:'red',
               },
            },
            resolve: {
               color: function($timeout){
                  console.info('Comincia resolve');
                  return $timeout(function(){
                     console.info('Resolve terminato');
                     return 'pink';
                  }, 1500);
               },
            },
            onEnter: function($state, color){
               console.info('On enter');
               if(color !== 'blue') console.log('wrong color');
            },
            onExit: function(){
               console.info('On exit');
            },
            templateUrl: '/subjects/ui-router/contacts/contacts.html',
            url: '/contacts',
         })
         .state('contacts.list', {
            template: '<h2>List</h2>',
            url: '/list'
         })
         .state('contacts.add', {
            template: '<h2>Add</h2>',
            url: '/add'
         })
         .state('contacts.query', {
            template: '<h2>Query</h2>',
            url: '/query?profession&sex'
         });

      $urlRouterProvider.otherwise('/');
   });