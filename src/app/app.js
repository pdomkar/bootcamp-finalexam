/**
 * Created by Petr on 17. 2. 2016.
 */
(function () {
  'use strict';
  $(document).ready(function(){
    $('input#uZipcode').mask('999 99', {
      placeholder: "___ __"
    });
    $('input#uPhone').mask('999 999 999', {
      placeholder: "___ ___ ___"
    });
  });
})();
