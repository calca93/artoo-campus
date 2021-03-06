angular.module('artoo').controller('PlayerCtrl', ($scope) => {
   $scope.player = {
      name: 'Legolas',
      hp: 100,
      exp: 17,
      level: 2,
      race: 'elf',
   };

   //take damage
   $scope.takeDamage = (damage) => {
      $scope.player.hp = (damage >= $scope.player.hp) ? 0 : $scope.player.hp - damage;
   };

   //isDead
   $scope.isDead = () => {
      return ($scope.player.hp) ? 'No' : 'Yes';
   };

   //level up
   $scope.levelUp = () => {
     $scope.player.level += 1;
   };

   //gain exp
   $scope.gainExp = (exp) => {
      var totalExp = $scope.player.exp += exp;

      if((totalExp) >= 100){
         totalExp = totalExp - 100;
         $scope.levelUp();
         $scope.player.hp = 100;
      }

      $scope.player.exp = totalExp ;
   };
});

