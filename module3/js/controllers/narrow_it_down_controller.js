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
      if (menu.searchTerm && menu.searchTerm) {
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

      } else {
        if (menu.found){
          menu.found.length = 0
        } else {
          menu.found = []
        }
      }
    }

    function removeFound(index) {
      menu.found.splice(index, 1)
    }
  }

})();
