'use strict';

(function () {
  angular.module('Data')
    .component('categoriesList', {
      templateUrl: 'app/data/categories/categories.component.html',
      bindings:{
        list: '<'
      }
    });
})();
