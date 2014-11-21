$(document).ready(function() {
  $('.mega').mouseenter(function() {
    $('.mega-still').hide();
    $('.mega-ready').show();
  })
    .mouseleave(function() {
    $('.mega-ready').hide();
    $('.mega-still').show();
  })
  .mousedown(function() {
    $('.mega-ready').hide();
    $('.mega-throwing').show();
    $('.haduken').show();
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    $('.mega-throwing').hide();
    $('.mega-ready').show();
    // ryu goes back to his ready position
  });
})