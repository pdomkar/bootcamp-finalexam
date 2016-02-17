(function () {
  'use strict';

  angular
    .module('finalexam')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($scope, localStorageService, $roootScope) {
    $scope.loanData = localStorageService.get('loanData');
    $scope.lang = $roootScope.lang;
  }
})();
