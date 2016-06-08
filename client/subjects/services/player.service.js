angular.module('artoo').service('PlayerSrv', function() {

   //getStatus, takeHit, drinkPotion, useMana, useGem, gainExp, die, respawn
   var player = {
      name: 'Legolas',
      hp: 100,
      exp: 17,
      level: 2,
      race: 'elf',
   };

   this.die = () => {
      player.hp = 0;
   };

   this.drinkPotion = (amount) => {
      if(this.isDead()) return;
      player.hp = ((player.hp + amount) > 100) ? 100 : (player.hp + amount) ;
   };

   this.levelUp = () => {
      if(this.isDead()) return;
      player.level += 1;
   };

   this.gainExp = (exp) => {
      if(this.isDead())return;
      var totalExp =player.exp += exp;

      if((totalExp) >= 100){
         totalExp = totalExp - 100;
         this.levelUp();
         player.hp = 100;
      }

      player.exp = totalExp ;
   };

   this.get = () =>{
      return player;
   };

   this.getStatus = () => {
      return player.hp;
   };

   this.isDead = () => {
      return !(!!player.hp);
   };

   this.respawn = () => {
      if(!this.isDead()) return;
      player.hp =  20;
   };

   this.takeHit = (damage) => {
      player.hp = (damage >= player.hp) ? 0 : player.hp - damage;
   };

});