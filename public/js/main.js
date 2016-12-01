!function() {
  "use strict";
  
  // var TL5_EVENTS = [
  //   'turbolinks:click',
  //   'turbolinks:before-visit',
  //   'turbolinks:visit',
  //   'turbolinks:request-start',
  //   'turbolinks:request-end',
  //   'turbolinks:before-cache',
  //   'turbolinks:before-render',
  //   'turbolinks:render',
  //   'turbolinks:load'
  // ];
  //
  // for (var index in TL5_EVENTS) {
  //   registerEventListener(TL5_EVENTS[index]);
  // }
  
  function registerEventListener(name, callback) {
    document.addEventListener(name, function() {
      console.log('Perform ' + name);
      
      if (typeof callback == 'function') {
        callback.apply(null, arguments);
      }
    });
  }

  registerEventListener('turbolinks:before-visit', function() {
    var $navbar = $('.navbar-collapse');
    
    if ( $navbar.hasClass('in') ) {
      $navbar.collapse('hide');
    }
  });
}();

Turbolinks.start();
