(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);


  UserService.$inject = [];
  function UserService($http, ApiPath) {
    var user = this;
  }
})();
