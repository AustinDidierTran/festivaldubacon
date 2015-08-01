var festivalControllers = angular.module('festivalControllers', []);

festivalControllers.controller('headerController', ['$scope', function($scope){
  $scope.tabs = [
    {
      "name": "Programmation",
      "imgUrl": "programmation.png",
      "url": "programmation"
    },
    {
      "name": "Kiosques",
      "imgUrl": "kiosque.png",
      "url": "kiosques"
    },
    {
      "name": "Mon Bacon d'amour",
      "imgUrl": "bacondamour.png",
      "url": "bacondamour"
    },
    {
      "name": "Social",
      "imgUrl": "social.png",
      "url": "social"
    },
    {
      "name": "Contact",
      "imgUrl": "contact.png",
      "url": "contact"
    },
    ];
}]);

festivalControllers.controller('programmationController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value #Programmation";
      
  }]);

festivalControllers.controller('kiosquesController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value #Kiosque";
      
  }]);
  
  festivalControllers.controller('bacondamourController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value #Bacondamour";
      
  }]);
  
  festivalControllers.controller('socialController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value #Social";
      
  }]);
  
  festivalControllers.controller('contactController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.testValue = "Test Value #Contact";
      
  }]);
  
  /* Code to be reused later on
    
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  
    */