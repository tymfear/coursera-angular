(function () {
  'use strict';

  angular.module('public')
    .controller('UserController', UserController);

  UserController.$inject = ['UserService', 'MenuService'];

  function UserController(UserService, MenuService) {
    var user = this;

    user.current = UserService.current;
    
    if(user.current){
      MenuService.getCategory(user.current.favorite).then(
        function (response) {
          user.favorite = response.data;
        }
      ); 
    }
  }
})();
