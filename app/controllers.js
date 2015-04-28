var SanctuaryControllers = angular.module('SanctuaryControllers', [
  'dang-jssor'
]);

SanctuaryControllers
  .controller('YoutubeListController',
    ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.feedurl = "http://gdata.youtube.com/feeds/users/UCj7Gf071ORhdVrrVUH9ObdA/uploads?alt=json-in-script&callback=JSON_CALLBACK";
      $http.jsonp($scope.feedurl).success(function(data) {
        $scope.results = data.feed.entry;
        $scope.resultLinks = new Array($scope.results.length - 1);
        $scope.resultThumbs = new Array($scope.results.length - 1);
        for(var i = 1; i < $scope.results.length; i++) {
          $scope.resultLinks[i-1] = $sce.trustAsResourceUrl($scope.results[i].id.$t.replace("http://gdata.youtube.com/feeds/videos", "http://www.youtube.com/embed"));
        }
        for(var i = 1; i < $scope.results.length; i++) {
          $scope.resultThumbs[i-1] = $sce.trustAsResourceUrl($scope.results[i].id.snippet.thumbnails.default.url);
        }
        $scope.sliderOptions = {
          name: "slider",

          $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
          $AutoPlayInterval: 1500,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
          $PauseOnHover: 1,                                //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
          $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
          $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
          $SlideDuration: 800,                                //Specifies default duration (swipe) for slide in milliseconds

          $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
              $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
              $ChanceToShow: 1                               //[Required] 0 Never, 1 Mouse Over, 2 Always
          },
          $ThumbnailNavigatorOptions: {                       //[Optional] Options to specify and enable thumbnail navigator or not
              $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
              $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
              $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
              $SpacingX: 8,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
              $DisplayPieces: 10,                             //[Optional] Number of pieces to display, default value is 1
              $ParkingPosition: 360                          //[Optional] The offset position to park thumbnail
          }
        }
      });
    }]);
