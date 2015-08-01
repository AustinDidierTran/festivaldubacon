var app = angular.module('app', [
  'ngRoute',
  'festivalControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
      console.log('configurating routes...');
    $routeProvider
      .when('/', {
        templateUrl: '/partials/programmation',
        controller: 'programmationController'
      })
      .when('/programmation', {
        templateUrl: '/partials/programmation',
        controller: 'programmationController'
      })
      .when('/kiosques', {
        templateUrl: '/partials/kiosques',
        controller: 'kiosquesController'
      })
      .when('/bacondamour', {
        templateUrl: '/partials/bacondamour',
        controller: 'bacondamourController'
      })
      .when('/social', {
        templateUrl: '/partials/social',
        controller: 'socialController'
      })
      .when('/contact', {
        templateUrl: '/partials/contact',
        controller: 'contactController'
      })
      .when('/unknown', {
        templateUrl: '/partials/unknown'
      })
      .otherwise({
        redirectTo: '/unknown'
      });
  }]);