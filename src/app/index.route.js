(function() {
  'use strict';

  angular
    .module('lesson8')
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
      .state('form', {
        parent: 'site',
        url: '/',
        views: {
          'content@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormController',
            controllerAs: 'form'
          }
        }  ,
        resolve: {
          formTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('form');
            return $translate.refresh();
          }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
