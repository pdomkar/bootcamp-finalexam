(function () {
  'use strict';

  angular
    .module('finalexam')
    .controller('UserDataController', UserDataController);

  /** @ngInject */
  function UserDataController($scope, localStorageService) {
    $scope.loanData = localStorageService.get('loanData');
    $scope.showModal = false;
    $scope.user = null;

    $scope.send = function (userForm) {
      if(userForm.$valid) {
        $scope.showModal = true;
      }
    };

  }
})();
