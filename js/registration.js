// // On page load...
// $(function() {

//   Parse.initialize("dHa1lqKqjUFf48Iw5tc4puKB0kbv1ONnejI6q91o","nEU6Qig9G0ldjBALkayRR5cMWQUc7qMXbjGjsGE0");

//   // should really disable the return key 
//   /*
//   $('form').bind("keyup keypress", function(e) {
//     var code = e.keyCode || e.which; 
//     if (code  == 13) {               
//       e.preventDefault();
//       return false;
//     }
//   })*/

    

//   $('#prereg-btn').click( function(){
//     $("#prereg-btn").hide();
//     $("#sponsor-btn").hide();
//     $("form").show();
//   });
//   // handler for form submission
//   $('#signup').on("click", function(event) {
//     var $form = $('form');
    
//     var $target = $($form.attr('data-target'));
//     console.log('hello');
//     // Log the user out in case they're still logged in
//     Parse.User.logOut();
    
//     var data = convertFormToJSON($form);
//     data.password = Math.random().toString(36).substring(2);
//     data.username = data.email;
    
//     var user = new Parse.User();
//     user.signUp(data, {
//       success: function(user) {
//         $("#prereg-btn").show();
//         $("#sponsor-btn").show();
//         $("#signup").hide();
//         window.alert("Thanks for your showing your interest! You'll be the first to know when registration opens for nwHacks.");

//         window.setTimeout( $('form').hide(), 1000);

//       },
//       error: function(user, error) {
//         $("#signup").show();
//         window.alert("There was an error with your application: " + error.message);
//       }
//     });
//     event.preventDefault();

//   });
// });

// function convertFormToJSON(form){
//   var array = $(form).serializeArray();
//   var json = {};
  
//   jQuery.each(array, function() {
//       json[this.name] = this.value || '';
//   });
  
//   return json;
// }
