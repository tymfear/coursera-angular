(function () {
  'use strict';

  var app = angular.module('ShoppingListCheckOff', []);


  app.controller('AlreadyBoughtShoppingController',
    AlreadyBoughtShoppingController);

  app.controller('ToBuyShoppingController', ToBuyShoppingController);
  app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject =
    ['$scope', 'ShoppingListCheckOffService'];

  AlreadyBoughtShoppingController.$inject =
    ['$scope', 'ShoppingListCheckOffService'];

  function ToBuyShoppingController($scope, service) {
    $scope.toBuyList = service.toBuy;
    $scope.buyItem = service.buyItem;
  }

  function AlreadyBoughtShoppingController($scope, service) {
    $scope.boughtList = service.bought;
  }

  function ShoppingListCheckOffService() {
    var self = this;

    self.toBuy = [
      {name: 'pies', quantity: '3'},
      {name: 'apples', quantity: 10},
      {name: 'oranges', quantity: '11'},
      {name: 'bananas', quantity: 8},
      {name: 'candies', quantity: '30'},
      {name: 'sausages', quantity: 14}
    ];

    self.bought = [];

    self.buyItem = function (item) {
      self.bought.push(item);
      removeBoughtItem(item);
    };

    var removeBoughtItem = function (item) {
      var index = -1;

      for (var i = 0; i < self.toBuy.length; i++) {
        var temp = self.toBuy[i];

        if (temp.name === item.name && temp.quantity === item.quantity) {
          index = i;
          break;
        }
      }

      self.toBuy.splice(index, 1);
    }
  }
})();
