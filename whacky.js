$(document).ready(function(){
        //  $( "li" ).hover(function() {
        //    $( this ).css("opacity", 0.5 );
          // $( this ).fadeIn( 500 );
        //  });
         $("li").mouseover(function(){
                 $(this).fadeTo(700, 0.25);
             });
             $("li").mouseout(function(){
                 $("li").fadeTo(700, 1.0);
                  });
//change bkg color when clicked
          $( "ul" ).click(function() {
           $(this).css({"background-color": "yellow", "font-size": "200%"})
           .append("<li>Clicked!</li>");
    })
    $("#wrestler").click(function() {
    $("#cats").fadeOut(1000, function() {
        $("#cats").attr("src",$("#wrestler").attr("href"));
    }).fadeIn(1000);
    return false;
});


    // $("#cats").click(function(){
    //       $(this).fadeOut(1000, 0.0)
    // });

   });

  //maybe try something like this:
  // $(".article-menu").hover(function(){
  //    $(this).find('img').css('opacity', 1);
  // }, function(){
  //    $(this).find('img').css('opacity', 0.7);
  // });
