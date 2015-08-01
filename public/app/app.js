var app = angular.module('app', [
  'ngRoute',
  'festivalControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
      console.log('configurating routes...');
    $routeProvider
      .when('/programmation', {
        templateUrl: '/partials/programmation',
        controller: 'kiosqueController'
      })
      .when('/kiosques', {
        templateUrl: '/partials/kiosques',
        controller: 'kiosqueController'
      })
      .when('/bacondamour', {
        templateUrl: '/partials/bacondamour',
        controller: 'kiosqueController'
      })
      .when('/social', {
        templateUrl: '/partials/social',
        controller: 'kiosqueController'
      })
      .when('/contact', {
        templateUrl: '/partials/contact',
        controller: 'kiosqueController'
      })
      .when('/unknown', {
        templateUrl: '/partials/unknown'
      })
      .otherwise({
        redirectTo: '/unknown'
      });
  }]);