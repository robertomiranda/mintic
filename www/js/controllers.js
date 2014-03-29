var Controllers = angular.module('starter.controllers', []);


//MIS CONTROLADORES

// A simple controller that fetches a list of data from a service
Controllers.controller('ProgramsCtrl',["$scope", "ProgramsService",  function($scope, ProgramsService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.programs = ProgramsService.all();
}]);


// A simple controller that shows a tapped item's data
Controllers.controller('ProgramDetailCtrl', function($scope, $stateParams, ProgramsService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.program = ProgramsService.get($stateParams.ProgramId);
});

Controllers.controller('StationCtrl', function($scope, $stateParams) {
  // "Pets" is a service returning mock data (services.js)
  console.log("Hola Mundo");
});
