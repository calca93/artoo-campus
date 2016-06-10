angular.module('artoo').service('PlayerSrv', function(){
   var dictionary = {
      fight: 'The player started a fight',
      potion: 'The player just drunk a potion',
   };

   var logs = [];

   this.log = (code) => {
      var text = dictionary[code] || "The player just made an anknown action";
      var date = new Date();
      logs.push({text: text, date: date});
   };

   this.getLogs = () =>{
      return logs;
   };
});