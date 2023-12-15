//test

console.log("Your index.js file is loaded correctly!")


//Navigation
$(".tab").on("click", function(){
    $(".tab").css({"background-color":"#EBECE9","color":"#373F42"}).fadeIn("slow");
    $(this).css({"background-color":"#373F42","color":"#EBECE9"});;
});

$(".tab").hover(function(){
    $(".tab").css({"background-color":"#EBECE9", "color":"#373F42"});
    $(this).css({"background-color":"#d8e0e4", "color":"#373F42"});
})

//UX and UI Skills
$(".flexContainer>.firstC").hover(function () {
    if ( $( ".first" ).first().is( ":hidden" ) ) {
      $( ".first" ).slideDown( "slow").css("color","rgba(152, 85, 41,0.75)");
    } else {
      $( ".first" ).slideUp();
    }
  } );

  $(".flexContainer>.secondC").hover(function () {
    if ( $( ".second" ).first().is( ":hidden" ) ) {
      $( ".second" ).slideDown( "slow").css("color","rgba(152, 85, 41,0.75)");
    } else {
      $( ".second" ).slideUp();
    }
  } );

  $(".flexContainer>.thirdC").hover(function () {
    if ( $( ".third" ).first().is( ":hidden" ) ) {
      $( ".third" ).slideDown( "slow").css("color","rgba(152, 85, 41,0.75)");
    } else {
      $( ".third" ).slideUp();
    }
  } );
