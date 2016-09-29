(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', 'baseUrl'];
  function MenuSearchService($http, baseUrl) {
    var search = this;

    search.getMatchedMenuItems = getMatchedMenuItems;

    function getMatchedMenuItems(searchTerm) {
      return $http({
        method: 'GET',
        url: (baseUrl + '/menu_items.json')
      }).then(function (result) {
        var foundItems = [];
        if (result.data.menu_items.length) {
          angular.forEach(result.data.menu_items, function (item) {
            if (item.description.indexOf(searchTerm) > -1) {
              foundItems.push(item)
            }
          })
        }

        return foundItems;
      });
    }
  }
})();
