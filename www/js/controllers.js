var Controllers = angular.module('starter.controllers', []);


// A simple controller that fetches a list of data from a service
Controllers.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
});

// A simple controller that fetches a list of data from a service
Controllers.controller('OfferIndexCtrl',["$scope", "OfferService",  function($scope, OfferService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.offers = OfferService.query();
}]);


// A simple controller that shows a tapped item's data
Controllers.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});

// A simple controller that shows a tapped item's data
Controllers.controller('OfferDetailCtrl', ["$scope", "$stateParams", "OfferService", function($scope, $stateParams, OfferService) {
  // "Offers" is a service returning mock data (services.js)
  $scope.offer = OfferService.get({offerId: $stateParams.offerId});
}]);

Controllers.controller('StationCtrl', function($scope, $stateParams) {
  // "Pets" is a service returning mock data (services.js)
  console.log("Hola Mundo");
});
