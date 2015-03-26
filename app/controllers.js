var SanctuaryControllers = angular.module('SanctuaryControllers', []);

SanctuaryControllers
  .controller('YoutubeListController',
    ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.feedurl = "http://gdata.youtube.com/feeds/users/UCj7Gf071ORhdVrrVUH9ObdA/uploads?alt=json-in-script&callback=JSON_CALLBACK";
      $http.jsonp($scope.feedurl).success(function(data) {
        $scope.results = data.feed.entry;
        $scope.resultLinks = new Array($scope.results.length);
        $scope.results.forEach(function(result, index) {
          $scope.resultLinks[index] = $sce.trustAsResourceUrl(result.id.$t.replace("http://gdata.youtube.com/feeds/videos", "http://www.youtube.com/embed"));
        });
      });
    }]);
