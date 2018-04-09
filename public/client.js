// $('img').mouseover(function() {
//   $(this).attr('src','/assets/bookmark4.jpg');
// });

// $('img').mouseout(function() {
//   $(this).attr('src','/assets/bookmark3.jpg');
// });

$(".delbookmark").click(function() {
  return confirm('Really delete this bookmark?');
});

$(".delweb").click(function() {
  return confirm('Really delete this website?');
});

$('.button1').click(function(){
$('.ui.modal')
  .modal('show')
;
});