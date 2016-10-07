'use strict';

(function () {
  angular.module('Data')
    .controller('ItemsController', ItemsController);

  ItemsController.inject = ['category'];
  function ItemsController(category) {
    var items = this;

    items.list = category.data.menu_items;
    items.category = category.data.category;
  }
})();
