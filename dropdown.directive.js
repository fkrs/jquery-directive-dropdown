(function($){
  
  var dropdown = {
    
    init: function(){
      this._bindEvents();
    },
    
    _bindEvents: function(){
      $(document.body).click(function(){
        $('[data-dropdown]').removeClass('dropdown--visible');
      });
      
      $('[data-dropdown-trigger]').click(this._handleTriggerClick);
    },
    
    _handleTriggerClick: function(e){
      e.stopPropagation();

      var selector = $(this).data('dropdown-trigger');
      if(!selector) return;

      var $el = $(selector);
      if(!$el[0]) return;

      $el.click(function(e){
        e.stopPropagation();
      });

      $el.toggleClass('dropdown--visible');
    }
    
  };
  
  dropdown.init();
  
}(jQuery));
