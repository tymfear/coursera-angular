(function () {
  'use strict';

  angular.module('app', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = null;
    $scope.result = '';

    $scope.showResult = function () {
      var result = processItems();
      checkResult(result);
    };

    var processItems = function () {
      var result = [];
      if ($scope.items) {
        var temp = $scope.items.split(',');

        for (var i in temp) {
          var val = temp[i].trim();
          if (val.length > 0) {
            result.push(val)
          }
        }
      }

      return result;
    };

    var checkResult = function (result) {
      var length = result.length;

      if (length <= 0) {
        $scope.items = null;
        $scope.result = 'Please enter data first';
        $scope.checkColor = 'red';
      } else if (length > 0 && length <= 3) {
        $scope.result = 'Enjoy!';
        $scope.checkColor = 'green';
      } else {
        $scope.result = 'Too much!';
        $scope.checkColor = 'green';
      }
    }
  }
})();
