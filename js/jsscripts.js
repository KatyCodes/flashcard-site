// $(document).ready(function() {
//   $(".col-sm-3").click(function() {
//     $(this).children().toggle();
//   });
// });

$(document).ready(function() {
  $(".col-sm-3").click(function() {
    $(this).children().slideToggle();
    
    $(this).slideToggle().stop();
  });

});
