angular.module('artoo').controller('PageLoaderCtrl', function($scope){
   $scope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => { //Utilizzare scope per mettersi in ascolto
      this.loading = true;
      fromState.name = fromState.name || 'nowhere';
      console.log('- transition starts from '+ fromState.name + ' to '+ toState.name);
   });

   $scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
     this.loading = false;
      console.log('transition as succeded from '+ fromState.name + ' to '+ toState.name);
   });
});