var festivalControllers = angular.module('festivalControllers', []);

festivalControllers.controller('kiosqueController', ['$scope', '$http', '$rootScope'
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value Je serai juste là avec kiosque";
      
    /* Code to be reused later on
    
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  
    */
  }]);