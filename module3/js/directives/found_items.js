(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .directive('foundItems', FoundItems);

  function FoundItems() {
    return {
      restrict: 'E',
      templateUrl: 'coursera-angular/module3/templates/found_items.html',
      scope: {
        foundItems: '=',
        onRemove: '&'
      }
    };
  }
})();
