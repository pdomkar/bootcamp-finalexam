(function () {
  'use strict';

  angular
    .module('finalexam')
    .directive('feModal', feModal);

  /** @ngInject */
  function feModal(localStorageService, $state) {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: 'app/components/modal/modal.html',
      scope: {
        header: '@',
        display: '=',
        userData: '='
      },
      link: function(scope, element, attr) {
        scope.loanData = localStorageService.get('loanData');
        scope.exit = function() {
          scope.display = false;
          localStorageService.remove('loanData');
          $state.go('loan');
        };
      }
    };
  }

})();
