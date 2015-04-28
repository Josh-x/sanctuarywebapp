var SanctuaryApp = angular.module('SanctuaryApp', [
  'ngRoute',
  'SanctuaryControllers',
  'dang-jssor'
]);

SanctuaryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/youtubelist', {
        templateUrl: 'partials/youtubelist.html',
        controller: 'YoutubeListController'
      })
      .otherwise({
        redirectTo: '/youtubelist'
      });
  }]);
