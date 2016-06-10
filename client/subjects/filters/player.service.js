angular.module('artoo').service('PlayerSrv', function(){
   var player = {
      name: 'Legolas',
      hp: 100,
      exp: 17,
      level: 2,
      race: 'elf',
   };

   this.get = () => {
      return player;
   };
});