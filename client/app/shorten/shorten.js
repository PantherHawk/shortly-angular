angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  $scope.link = { url: '' };
  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function() {
        $location.path('/');
      })
      .catch(function(err) {
        console.error(err);
      });
    }


  // $scope.logout = function() {
  //   console.log('click logout');
  //   Auth.signout();
  // };
});
