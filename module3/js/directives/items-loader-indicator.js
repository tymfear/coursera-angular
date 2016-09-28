(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .directive('itemsLoaderIndicator', ItemsLoaderIndicator);

  function ItemsLoaderIndicator() {
    return {
      restrict: 'E',
      templateUrl: 'coursera-angular/module3/templates/items_loader_indicator.html',
      scope: {
      }
    };
  }
})();
