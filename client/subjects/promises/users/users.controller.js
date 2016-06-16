angular.module('artoo').controller('UsersCtrl', function($scope, UsersSrv){

   $scope.loading = true;

   UsersSrv
      .query()
      .then(function(data){
         $scope.users = data;
         $scope.loading = false;
      })
      .catch(function(err){
         console.error(err);
      });

      $scope.getDetails = (id) => {
         $scope.loading = true;
         UsersSrv.get({id: id, typology: 'users'}).then((data) => {
           $scope.loading = false;
           $scope.userDetails = data;
           $scope.user = data;
        });
      };

      UsersSrv.get({id: 1}).then((data) => {
         console.log(data);
      });

   $scope.user = UsersSrv.create();

   $scope.remove = (user) => {
      $scope.loading = true;
      user.$remove({id: user.id}).then((data) => {
         console.info('Removed: ' + data);
         $scope.loading = false;
      }).catch();
   };

   $scope.save = (user, form) =>{
      $scope.loading = true;
      user.createdAt = new Date();
      user.$save().then((data) => {
         $scope.loading = false;
         $scope.user = UsersSrv.create();
         form.$setPristine();
         console.info(data);
      }).catch();
   };
});