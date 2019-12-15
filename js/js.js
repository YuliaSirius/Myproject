$(document).ready(function() {
  $(".slider1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider2",
    dots: true,
    arrows: false,
    // infinite: false,
     });
});

$(document).ready(function() {
  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider1",
    // centerMode: false,
    // centerPadding: '156px',
    // infinite: false,
    prevArrow: false,
  });
});
