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

Controllers.controller('StationCtrl', function($scope, $stateParams, ProgramsService) {
  // "Pets" is a service returning mock data (services.js)
  console.log("Hola Mundo");
  //var media = new Audio("http://ia600200.us.archive.org/1/items/testmp3testfile/mpthreetest.mp3");
  var stationMedia = new Audio("http://75.102.43.195/kwmu2");
  var programAudio;
  $scope.volume = 0.5;
  $scope.programs = ProgramsService.all();

  $scope.playStation = function(){
    stationMedia.play();
  }

  $scope.pauseStation = function(){
    stationMedia.pause();
    programAudio.pause();
  }

  $scope.playProgram = function(url){
    programAudio = new Audio(url);
    programAudio.play();
  }
});
