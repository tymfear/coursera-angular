(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .directive('itemsLoaderIndicator', ItemsLoaderIndicator);

  function ItemsLoaderIndicator() {
    return {
      restrict: 'E',
      templateUrl: 'templates/items_loader_indicator.html',
      scope: {
      }
    };
  }
})();
