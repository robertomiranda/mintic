var Controllers = angular.module('starter.controllers', []);


// A simple controller that fetches a list of data from a service
Controllers.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
});

// A simple controller that fetches a list of data from a service
Controllers.controller('OfferIndexCtrl',["$scope", "OfferService",  function($scope, OfferService) {
  // "Pets" is a service returning mock data (services.js)
  console.log("hey");
  //$scope.offers = [];
  $scope.offers = OfferService.query();
  console.log($scope.offers);
}]);


// A simple controller that shows a tapped item's data
Controllers.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
