var i = 1;
$('.progressck .circle').removeClass().addClass('circle');
$('.progressck .bar').removeClass().addClass('bar');
function hello() {
  $('.progressck .circle:nth-of-type(' + i + ')').addClass('active');

  $('.progressck .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');

  $('.progressck .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');

  $('.progressck .bar:nth-of-type(' + (i-1) + ')').addClass('active');

  $('.progressck .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');

  i++;

  if (i==0) {
    $('.progressck .bar').removeClass().addClass('bar');
    $('.progressck div.circle').removeClass().addClass('circle');
    i = 1;
  }
}