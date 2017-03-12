angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
// should get all the links and display them
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getAll()
    .then(function(resp) {
      $scope.data.links = resp;
    })
    .catch(function(err) {
      console.error(err);
    })
  }
  $scope.getLinks();
});
