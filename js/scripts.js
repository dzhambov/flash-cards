$(document).ready(function() {
  $("button#javascript").click(function() {
    $(".card1-show").toggle();
    $(".card1-hide").toggle();
  });

  $("button#functions").click(function() {
    $(".card2-show").toggle();
    $(".card2-hide").toggle();
  });
});