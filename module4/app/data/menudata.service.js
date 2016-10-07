(function () {
  angular.module('Data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.inject = ['baseUrl', '$http'];
  function MenuDataService(baseUrl, $http) {
    var menu = this;

    menu.getAllCategories = getAllCategories;
    menu.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      return $http({
        method: 'GET',
        url: (baseUrl + '/categories.json')
      });
    }


   
    function getItemsForCategory(category) {
      return $http({
        method: 'GET',
        url: (baseUrl + '/menu_items.json?category=' + category),
        params: {category: category}
      });
    }
  }
})();
