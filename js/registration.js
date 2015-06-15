// On page load...
$(function() {

  Parse.initialize("VQV5exDOHIgQBqAnOM9KtnlyG3IIJ6qIeFwHvPxA", "V9BggunFvfLpRPUMJJvQ1tK1EnPlffoubmnD6LIl");
  // should really disable the return key 
  
  // $('form').bind("keyup keypress", function(e) {
  //   var code = e.keyCode || e.which; 
  //   if (code  == 13) {               
  //     e.preventDefault();
  //     return false;
  //   }
  // });

  $('#prereg-btn').click( function(){
    $("#prereg-btn").hide();
    $("#sponsor-btn").hide();
    $("form").show();
  });
  
  // handler for form cancel
  $('#cancel').on("click", function(event) {
    //reset form fields
    $("form").find("input[type=text]").val("");
    
    //hide form
    $("#prereg-btn").show();
    $("#sponsor-btn").show();
    $("form").hide();
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
        $("#prereg-btn").show();
        $("#sponsor-btn").show();
        $("#signup").hide();
        $("#cancel").hide();
        
        $modal = $('#prereg-modal');
        
        $modal.find('.modal-title').text('Submission Successful');
        $modal.find('.modal-body p').text('Thanks for your showing your interest! You\'ll be the first to know when registration opens for nwHacks 2016.');
        $modal.modal('show');
        
        //window.alert("Thanks for your showing your interest! You'll be the first to know when registration opens for nwHacks.");

        window.setTimeout( $('form').hide(), 500);

      },
      error: function(user, error) {
        //$("#signup").show();
        $modal = $('#prereg-modal');
        
        $modal.find('.modal-title').text('Submission Error');
        $modal.find('.modal-body p').text('There was an error with your application: ' + error.message);
        $modal.modal('show');
        //window.alert("There was an error with your application: " + error.message);
      }
    });
    event.preventDefault();

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
