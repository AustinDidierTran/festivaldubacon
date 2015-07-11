var app = angular.module('app', [
  'ngRoute',
  'festivalControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
      console.log('configurating routes...');
    $routeProvider
      .when('/kiosque', {
        templateUrl: '/partials/kiosque',
        controller: 'kiosqueController'
      })
      .otherwise({
        redirectTo: '/kiosque'
      });
  }]);