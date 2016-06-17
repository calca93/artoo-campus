module.exports = function(options){
   options = options || {};
   var myName = options.robot || 'robot';
   function sayHello(name){
      console.log(myName + ' says hello to ' + name);
   }

   return {
      name: myName,
      version: '0.1.0',

      //public API
      sayHello: sayHello,
   };
};