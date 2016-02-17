(function () {
  'use strict';

  angular
    .module('finalexam')
    .directive('feLoanSlider', feLoanSlider);

  /** @ngInject */
  function feLoanSlider() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {

        var sliderElem = element.find('[name="slider"]');
        scope.locRange = {min:10000, max: 500000, step: 1000};

        if(scope.range !== null) {
          scope.locRange.min = scope.range.min;
          scope.locRange.max = scope.range.max;
          scope.locRange.step = scope.range.step;
        }

        scope.$watch('range.min', function() {
          if(scope.range !== null) {
            scope.locRange.min = scope.range.min;
            lnSlider.slider('setAttribute', 'min', parseInt(scope.locRange.min));
          }
        });
        scope.$watch('range.max', function() {
          if(scope.range !== null) {
            scope.locRange.max = scope.range.max;
            lnSlider.slider('setAttribute', 'max', parseInt(scope.locRange.max));
          }
        });
        scope.$watch('model', function() {
          lnSlider.slider('setValue', parseInt(scope.model));
          element.find('[name="sliderText"]').val(scope.model);
        });

        var lnSlider = sliderElem.slider({
          step: scope.locRange.step,
          min: scope.locRange.min,
          max: scope.locRange.max,
          value: scope.model,
          tooltip: 'show'
        });

        scope.changed = function( val ) {
          if(val < scope.locRange.min) {
            val = scope.locRange.min;
          } else if(val > scope.locRange.max) {
            val = scope.locRange.max;
          }
          scope.model = val;
          element.find('[name="sliderText"]').val(scope.model);
          lnSlider.slider('setValue', parseInt(scope.model));
        };
      },
      scope: {
        model: "=",
        label: "@",
        change: "&",
        range: "=",
        type: "@"
      },
      templateUrl: 'app/components/loanSlider/loanSlider.html'
    };
  }

})();
