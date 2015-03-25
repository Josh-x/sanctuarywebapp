describe('YoutubeListController', function() {
  beforeEach(module('SanctuaryApp'));

  var $controller;

  beforeEach(inject(function(_$controller_, $httpBackend) {
    $controller = _$controller_;
    httpBackend = $httpBackend;
  }));

  describe('$scope.results', function() {
    it('outputs the YouTube feed data', function() {
      var $scope = {};
      var controller = $controller('YoutubeListController', {
        $scope: $scope
      });
      $scope.feedurl = "http://gdata.youtube.com/feeds/users/enigmaticheart666/uploads?alt=json-in-script&callback=JSON_CALLBACK";
      $scope.hello = httpBackend.whenJSONP($scope.feedurl);
      expect($scope.hello).toBeDefined();
    })
  })
});
