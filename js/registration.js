// On page load...
$(function() {


  // should really disable the return key 
  /*
  $('form').bind("keyup keypress", function(e) {
    var code = e.keyCode || e.which; 
    if (code  == 13) {               
      e.preventDefault();
      return false;
    }
  })*/

  $('button#prereg-btn').click( function(){
    $("#prereg-btn").hide();
    $("#sponsor-btn").hide();
    $("form").show();
  });
  // handler for form submission
  $('#signup').on("click", function(event) {
    var $form = $('form');
    
    var $target = $($form.attr('data-target'));

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    data.password = Math.random().toString(36).substring(2);
    data.username = data.email;
    
    var user = new Parse.User();
    user.signUp(data, {
      success: function(user) {
        window.alert("Thanks for your application! Please check your email to confirm your address.");
        $('form').hide();
        $("#prereg-btn").hide();
        $("#sponsor-btn").hide();
      },
      error: function(user, error) {
        window.alert("There was an error with your application: " + error.message);
      }
    });

  });
});

function convertFormToJSON(form){
  var array = $(form).serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
}
