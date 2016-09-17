(function () {
  'use strict';

  var app = angular.module('ShoppingListCheckOff', []);


  app.controller('AlreadyBoughtShoppingController',
    AlreadyBoughtShoppingController);

  app.controller('ToBuyShoppingController', ToBuyShoppingController);
  app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject =
    ['ShoppingListCheckOffService'];

  AlreadyBoughtShoppingController.$inject =
    ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(service) {
    var self = this;

    self.list = service.toBuyList;
    self.buyItem = service.buyItem;
  }

  function AlreadyBoughtShoppingController(service) {
    var self = this;

    self.list = service.boughtList;
  }

  function ShoppingListCheckOffService() {
    var self = this;

    self.toBuyList = [
      {name: 'pies', quantity: '3'},
      {name: 'apples', quantity: 10},
      {name: 'oranges', quantity: '11'},
      {name: 'bananas', quantity: 8},
      {name: 'candies', quantity: '30'},
      {name: 'sausages', quantity: 14}
    ];

    self.boughtList = [];

    self.buyItem = function (index) {
      var item = self.toBuyList.splice(index, 1)[0];

      self.boughtList.push(item);
    };
  }
})();
