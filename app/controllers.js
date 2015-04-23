var SanctuaryControllers = angular.module('SanctuaryControllers', []);

SanctuaryControllers
  .controller('YoutubeListController',
    ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.feedurl = "http://gdata.youtube.com/feeds/users/UCj7Gf071ORhdVrrVUH9ObdA/uploads?alt=json-in-script&callback=JSON_CALLBACK";
      $http.jsonp($scope.feedurl).success(function(data) {
        $scope.results = data.feed.entry;
        $scope.resultLinks = new Array($scope.results.length - 1);
        for(var i = 1; i < $scope.results.length; i++) {
          $scope.resultLinks[i-1] = $sce.trustAsResourceUrl($scope.results[i].id.$t.replace("http://gdata.youtube.com/feeds/videos", "http://www.youtube.com/embed"));
        }
        $scope.$on('test', function(ngRepeatFinishedEvent) {
          $('.bxslider').bxSlider({
            video: true,
            useCSS: false
          });
          $('.video-slide').fitVids();
        });
      });
    }])
    .directive('onFinishRender', function ($timeout) {
      return {
          restrict: 'A',
          link: function (scope, element, attr) {
              if (scope.$last === true) {
                  $timeout(function () {
                      scope.$emit(attr.onFinishRender);
                  });
              }
          }
      };
    });
