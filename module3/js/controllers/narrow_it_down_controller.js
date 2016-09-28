(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.narrowDown = function () {
      if (!menu.searchTerm || !menu.searchTerm.length) {return}

      MenuSearchService
        .getMatchedMenuItems(menu.searchTerm)
        .then(function (result) {
          menu.found = result;
        })
    }
  }

})();
