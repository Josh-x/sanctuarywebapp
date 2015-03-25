var SanctuaryControllers = angular.module('SanctuaryControllers', []);

SanctuaryControllers
  .controller('YoutubeListController',
    ['$scope', '$http', function($scope, $http) {
      $scope.feedurl = "http://gdata.youtube.com/feeds/users/enigmaticheart666/uploads?alt=json-in-script&callback=JSON_CALLBACK";
      $http.jsonp($scope.feedurl).success(function(data) {
        $scope.results = data.feed.entry;
      });
    }]);
