(function() {
  'use strict';

  angular
    .module('finalexam')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('site', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'app/components/navbar/navbar.html'
          }
        },
        resolve: {
          mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('main');
            return $translate.refresh();
          }]
        }
      })
      .state('loan', {
        parent: 'site',
        url: '/',
        views: {
          'content@': {
            templateUrl: 'app/loan/loan.html',
            controller: 'LoanController',
            controllerAs: 'loan'
          }
        }  ,
        resolve: {
          formTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('loan');
            return $translate.refresh();
          }]
        }
      })
      .state('userData', {
        parent: 'site',
        url: '/userData',
        views: {
          'content@': {
            templateUrl: 'app/userData/userData.html',
            controller: 'UserDataController',
            controllerAs: 'userData'
          }
        }  ,
        resolve: {
          formTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('userData');
            return $translate.refresh();
          }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
