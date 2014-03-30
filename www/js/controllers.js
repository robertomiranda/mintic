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
  //var media = new Audio("http://ia600200.us.archive.org/1/items/testmp3testfile/mpthreetest.mp3");
  var stationMedia = new Audio("http://outlook.mineducacion.gov.co:8000/live.ogg");
  var programAudio;
  $scope.volume = 0.5;
  $scope.programs = ProgramsService.all();
  $scope.playing = false;

  $scope.playStation = function(){
    stationMedia.play();
    $scope.playing = true;
  }

  $scope.pauseStation = function(){
    stationMedia.pause();
    programAudio.pause();
    $scope.playing = false;
  }

  $scope.playProgram = function(url){
    programAudio = new Audio(url);
    programAudio.play();
    $scope.playing = true;
  }

  $scope.twitter = function(){
    window.open(encodeURI('http://k-rudy.github.io/phonegap-twitter-timeline?450039386776690688'), '_blank', 'location=no');
  }
});
