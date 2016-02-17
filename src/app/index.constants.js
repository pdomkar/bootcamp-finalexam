(function() {
  'use strict';

  angular
    .module('finalexam')
    .constant('FORM_DATA', 'form_data')
    .constant('ZIPCODE_REGEXP', /^\d{3} \d{2}$/)
    .constant('EMAIL_REGEXP', /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
    .constant('PHONE_REGEXP', /^[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$/);
})();
