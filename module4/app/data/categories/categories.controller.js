'use strict';

(function () {
  angular.module('Data')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.inject = ['list'];
  function CategoriesController(list) {
    var categories = this;

    categories.list = list.data;
  }
})();
