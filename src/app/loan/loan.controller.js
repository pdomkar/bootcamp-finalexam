(function () {
  'use strict';

  angular
    .module('finalexam')
    .controller('LoanController', LoanController);

  /** @ngInject */
  function LoanController($scope, $state, localStorageService, $rootScope, $translate) {
    if($rootScope.lang === undefined) {
      $rootScope.lang = 'en';
    }
    $rootScope.loanData = localStorageService.get('loanData');

    /**
     * Init data of loan
     */
    $scope.loanData = {
      amount: 10000,
      timeToPay: 12,
      monthlyPayment: Math.round((10000 + parseInt((10000*10/100))) / 12),
      interestRate: 10
    };

    /**
     * Range for tax of payment in number
     * @type {{min: number, max: number, step: number}}
     */
    $scope.rangePayment = {
      min: Math.round(11000 / 96),
      max: Math.round(11000 / 12),
      step: 1
    };

    /**
     * Range for time to pay in month
     * @type {{min: number, max: number, step: number}}
     */
    $scope.rangeTime = {
      min:12,
      max:96,
      step: 1
    };

    var loanDataStor = localStorageService.get('loanData');
    if(loanDataStor  !== undefined && loanDataStor  !== null) {
      $scope.loanData.amount = parseInt(loanDataStor.amount);
      $scope.loanData.timeToPay = parseInt(loanDataStor.timeToPay);
      $scope.loanData.monthlyPayment = parseInt(loanDataStor.monthlyPayment);
      $scope.loanData.interestRate = parseInt(loanDataStor.interestRate);

      var amountWithRate = (parseInt($scope.loanData.amount) + parseInt(($scope.loanData.amount*$scope.loanData.interestRate/100)));
      $scope.rangePayment.min = Math.round(amountWithRate / 96);
      $scope.rangePayment.max = Math.round(amountWithRate / 12);
      $scope.loanData.monthlyPayment = Math.round(amountWithRate / $scope.loanData.timeToPay);
    }

    $rootScope.changeLanguage = function(lang) {
      $translate.use(lang);
      $rootScope.lang = lang;
    };

    /**
     * This is call when is change value in amount, update monthlyPayment and min and max value by monthlyPayment
     */
    $scope.amountChange = function() {
      var amountWithRate = (parseInt($scope.loanData.amount) + parseInt(($scope.loanData.amount*$scope.loanData.interestRate/100)));
      $scope.rangePayment.min = Math.round(amountWithRate / 96);
      $scope.rangePayment.max = Math.round(amountWithRate / 12);
      $scope.loanData.monthlyPayment = Math.round(amountWithRate / $scope.loanData.timeToPay);
    };

    /**
     * This is call when is change value in timeTopay, update monthlyPayment
     */
    $scope.timeToPayChange = function() {
      var amountWithRate = (parseInt($scope.loanData.amount) + parseInt(($scope.loanData.amount*$scope.loanData.interestRate/100)));
      $scope.loanData.monthlyPayment = Math.round(amountWithRate / $scope.loanData.timeToPay);
    };

    /**
     * This is call when is change value in monthlyPayment, update timeToPay
     */
    $scope.monthlyPaymentChange = function() {
      var amountWithRate = (parseInt($scope.loanData.amount) + parseInt(($scope.loanData.amount*$scope.loanData.interestRate/100)));
      $scope.loanData.timeToPay = Math.round(amountWithRate / $scope.loanData.monthlyPayment);
    };

    $scope.continue = function() {
      localStorageService.set('loanData', $scope.loanData);
      $rootScope.loanData = localStorageService.get('loanData');
      $state.go('userData');
    };
  }
})();
