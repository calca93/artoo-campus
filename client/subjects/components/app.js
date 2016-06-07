//define app module
var app = angular
  .module('artooInit', [])
  .run(function(){
    console.info("Run from setter");
  });
  
angular
  .module('artooInit')
  //.config(angular.noop)
  .run(() => {
    console.info('Run from getter!');
  });

app.run(function(){
  console.info("Run from a var");
})
//define run function