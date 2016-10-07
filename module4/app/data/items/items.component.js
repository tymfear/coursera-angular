'use strict';

(function () {
  angular.module('Data')
    .component('itemsList', {
      templateUrl: 'app/data/items/items.component.html',
      bindings:{
        list: '<',
        category: '<'
      }
    });
})();
