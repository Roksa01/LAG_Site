(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $("#map").click(function(){
      $("iframe").slideToggle();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

