$(function() {
  Parse.initialize("dHa1lqKqjUFf48Iw5tc4puKB0kbv1ONnejI6q91o","nEU6Qig9G0ldjBALkayRR5cMWQUc7qMXbjGjsGE0");
  $("#faq nav a").click(function(e) {
    e.preventDefault();
    $("#faq article").removeClass( "active" );
    $("#faq nav a").removeClass( "activetab" );
    $($(this).attr("href")).addClass("active");
    $(this).addClass("activetab");
  });
  
  // disable parralax if mobile device
  if (Modernizr.touch){
    
    } else { 
  
  var s = skrollr.init();
  
  }
});
