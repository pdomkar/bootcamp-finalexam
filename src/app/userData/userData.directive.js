(function () {
  'use strict';

  angular
    .module('finalexam')
    .directive('feZipcode', feZipcode)
    .directive('feEmail', feEmail)
    .directive('fePhone', fePhone)
    .directive('feAge', feAge);

  /** @ngInject */
  function feZipcode(ZIPCODE_REGEXP) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.zipcode =
          function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              return true;
            }
            return ZIPCODE_REGEXP.test(viewValue);
          };
      }
    };
  }

  /** @ngInject */
  function feEmail(EMAIL_REGEXP) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.email =
          function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              return true;
            }
            return EMAIL_REGEXP.test(viewValue);
          };
      }
    };
  }

  /** @ngInject */
  function fePhone(PHONE_REGEXP) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.email =
          function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              return true;
            }
            return PHONE_REGEXP.test(viewValue);
          };
      }
    };
  }

  /** @ngInject */
  function feAge() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.age =
          function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              return true;
            }
            return (viewValue > 0 && viewValue < 150);
          };
      }
    };
  }

})();
