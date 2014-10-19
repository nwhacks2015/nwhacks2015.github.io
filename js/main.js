$("#faq nav a").click(function(e) {
  e.preventDefault();
  $("#faq article").removeClass( "active" );
  $("#faq nav a").removeClass( "activetab" );
  $($(this).attr("href")).addClass("active");
  $(this).addClass("activetab");
});


$("#hero button").click(function(e){
    $(this).hide();
    $("#hero form").show();
    $("#sponsor-btn").toggle();
});


$("#hero form").submit(function(e){
    form = $(this);
    e.preventDefault();
    $.post('subscribe', form.serialize())
        .done(function(data){
            form.parent().append('<p class="success">Thanks! We&#39;ll be in touch soon.</p>');
            form.remove();
        })

        .fail(function(data){
            alert(data.responseJSON.message);
        })
});

// disable parralax if mobile device
// if (Modernizr.touch){

// } else {

// var s = skrollr.init();

// }
