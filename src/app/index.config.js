(function() {
  'use strict';

  angular
    .module('finalexam')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: 'i18n/{lang}/{part}.json'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
    $translateProvider.useSanitizeValueStrategy('sanitize');

    localStorageServiceProvider.setPrefix('l8');
  }

})();
