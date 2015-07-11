var festivalControllers = angular.module('festivalControllers', []);

festivalControllers.controller('kiosqueController', ['$scope', '$http',
  function ($scope, $http) {
      
      $scope.testValue = "Test Value";
      
    /* Code to be reused later on
    
    
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  
    */
  }]);
