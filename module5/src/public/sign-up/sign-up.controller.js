(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];

  function SignUpController(menu, user) {
    var signUp = this;

    signUp.user = {};

    signUp.saveUser = saveUser;
    signUp.verifyFavorite = verifyFavorite;

    function verifyFavorite() {
      if (signUp.user.favorite && signUp.user.favorite.length) {
        menu.getCategory(signUp.user.favorite)
          .then(function (result) {
            signUp.form.favorite.$setValidity('favorite', true)
          })
          .catch(function () {
            signUp.form.favorite.$setValidity('favorite', false)
          });
      }
    }

    function saveUser() {
      user.current = {
        first_name: signUp.user.first_name,
        last_name: signUp.user.last_name,
        email: signUp.user.email,
        phone: signUp.user.phone,
        favorite: signUp.user.favorite
      };

      signUp.info_saved = true;
    }
  }
})();