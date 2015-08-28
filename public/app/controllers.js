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
      "name": "Contact",
      "imgUrl": "contact.png",
      "url": "contact"
    },
    ];
}]);

festivalControllers.controller('programmationController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
    
    $scope.dates = [
      {
      
      "name": "Samedi 14 mai",
      "venues":[{
        "name": "Scène Principale",
        "shows":[
        {
          "band": "Passe-moé la puck",
          "time": "19h00"
        },
        {
          "band": "Justin Boulet",
          "time": "20h30"
        }
        
        
        ]
      },
      {
        "name": "Scène Country",
        "shows" : [
          {
          "band": "Groupe Country Road",
          "time": "20h00"
        }
          
        ]
      }]
    },
    {
      
      "name": "Dimanche 15 mai",
      "venues":[{
        "name": "Scène Principale",
        "shows":[
        {
          "band": "Passe-moé la puck",
          "time": "19h00"
        },
        {
          "band": "BODH'AKTAN",
          "time": "20h30"
        }
        
        
        ]
      },
      {
        "name": "Scène Country",
        "shows" : [
          {
          "band": "Guillaume Cyr Band",
          "time": "20h00"
        }
          
        ]
      }]
    }
    ]
      
  }]);

festivalControllers.controller('kiosquesController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.kiosques = [{
      "name": "Chocolate Bacon Lover",
      "phone": {
          "business": "819-340-0411",
          "urgency": "819-434-2537"
        },
      "address": {
        "no": "226",
        "street": "11iem av sud",
        "city": "Sherbrooke", 
        "province": "QC",
        "postal": "J1G 2T3"
      },
      "description": "Je vend des produit au bacon sure mon site internet et en linge.",
      "products": [{
        "name": "Bacon au chocolat",
        "description": "Tranche de bacon enrobé de chocolat"
      },
      {
        "name": "Bretzel au Bacon chocolat",
        "description": "2 sorte de bretzel long et coutr enrobé de chocolat avec bacon"
      },
      {
        "name": "Fudge au Chocolat",
        "description": "Différentes saveurs de fudge avec Bacon"
      }],
      "requirements": {
        "electricity": "En ce moment j'ai just besoin d'un pris d'electricitey normal mais c'est possible que mon besion change avant l'annee prochaine",
        "other": "Chapiteau 10'x10', Table, Chaise, Espace réfrigéré dans le camion réfrigéré"
      }
    }
      ]
      
  }]);
  
  festivalControllers.controller('bacondamourController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.restaurants = [
      {
        "name": "Auguste",
        "address": {
          "no": "82",
          "street": "Wellington Nord",
          "city": "Sherbrooke"
        },
        "website": "http://www.auguste-restaurant.com",
        "facebook": "https://www.facebook.com/restaurantauguste?fref=ts"
      },
      {
        "name": "O Chevreuil",
        "address": {
          "no": "62",
          "street": "Wellington Nord",
          "city": "Sherbrooke"
        },
        "website": "http://www.ochevreuil.com",
        "facebook": "https://www.facebook.com/pages/O-Chevreuil-Taverne-Américaine/115716435258350?fref=ts"
      },
      {
        "name": "Bistro Kapzak",
        "address": {
          "no": "20",
          "street": "Wellington Sud",
          "city": "Sherbrooke"
        },
        "website": "http://www.bistrokapzak.ca",
        "facebook": "https://www.facebook.com/pages/Bistro-Kapzak/292727127404471?fref=ts"
      }
      ]
      
  }]);
  
  festivalControllers.controller('contactController', ['$scope', '$http', '$rootScope',
  function ($scope, $http, $rootScope) {
      
    $scope.contacts = [
      {
        "name": "Leslie Tran",
        "title": "Directrice Générale",
        "phone": "819 446-4966",
        "email": "leslie@festivaldubacon.com"
      },
      {
        "name": "Yann Doyon",
        "title": "Responsable programmation musicale et logistique",
        "phone": "819 574-8322",
        "email": "yann@festivaldubacon.com"
      },
      {
        "name": "Annie Labbé",
        "title": "Responsable des partenaires",
        "phone": "819 574-3066",
        "email": "annie@festivaldubacon.com"
      },
      {
        "name": "Alex Aubut",
        "title": "Responsable des kiosques",
        "phone": "819 446-4966",
        "email": "benevoles@festivaldubacon.com"
      },
      
      ]
  }]);
  
  /* Code to be reused later on
    
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  
    */