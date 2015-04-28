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
            /*var options = {
                $AutoPlay: true,                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $DragOrientation: 3,                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $AutoPlayInterval: 4000,            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
                $ArrowKeyNavigation: true,   		//[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $BulletNavigatorOptions: {                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $ActionMode: 1,                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                    $AutoCenter: 1,                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 10,                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 0,                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                }
              };
            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$ScaleWidth(Math.min(parentWidth, 640));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            //Scale slider immediately
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
            //fetch and initialize youtube players
            $JssorPlayer$.$FetchPlayers(document.body);
        });*/
      });
    })
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
