'use strict';

(function () {
  angular.module('MenuApp')
    .config(routesConfig);

  routesConfig.inject = ['$urlRouterProvider', '$stateProvider'];
  
  function routesConfig($urlRouterProvider, $stateProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/home.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'app/data/categories/categories.html',
        controller: 'CategoriesController as categories',
        resolve: {
          list: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('category_items', {
        url: '/categories/:short_name',
        templateUrl: 'app/data/items/items.html',
        controller: 'ItemsController as items',
        resolve: {
          category: ['MenuDataService', '$stateParams',
            function (MenuDataService, $stateParams) {
              return MenuDataService
                .getItemsForCategory($stateParams.short_name);
            }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }
})();
