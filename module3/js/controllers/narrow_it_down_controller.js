(function () {
  'use strict';

  angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.loading = false;
    menu.narrowDown = narrowDown;
    menu.remove = removeFound;

    function narrowDown() {
      if (!menu.searchTerm || !menu.searchTerm.length) {return}
      menu.loading = true;

      menu.items = MenuSearchService
        .getMatchedMenuItems(menu.searchTerm);

      menu.items.then(function (result) {
        menu.found = result;
        menu.loading = false;
      })
        .catch(function (err) {
          menu.loading = false;
          console.log('Something went wrong: ', err);
        });

    }

    function removeFound(index) {
      menu.found.splice(index, 1)
    }
  }

})();
