$(document).ready(function() {
  $(".slider1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider2",
    dots: true,
    arrows: false
     });
});
$(document).ready(function() {
  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider1",
       prevArrow: false
  });
});
$(document).ready(function() {
  $(".slider-steps").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
});
function vidplay() {
  let video = document.getElementById("Video1");
  let button = document.getElementById("play");
  if (video.paused) {
     video.play();
     button.style.opacity="0";
        //  button.textContent = "5";
  } else {
     video.pause();
     button.style.opacity="1";
  //    button.textContent = "";
  }
}
