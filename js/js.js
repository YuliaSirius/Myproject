// Sliders
$(document).ready(function() {
  $(".slider1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider2",
    dots: true,
    arrows: true,
    swipeToSlide: true,
    infinite: false
  });
});
$(document).ready(function() {
  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    asNavFor: ".slider1",
    infinite: false
  });
});
$(document).ready(function() {
  $(".slider-steps").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    swipeToSlide: true,
    arrows: true,
    infinite: false
  });
});
// Buttons for video
let restart = document.querySelector(".restart");
let rew = document.querySelector(".rew");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let fastfwd = document.querySelector(".fastfwd");
let button = document.querySelector(".btnvideo");
let video = document.querySelector(".video");
let btns = document.querySelector(".btns");

button.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    button.style.opacity = "0";
    btns.style.zIndex = "0";
  } else {
    video.pause();
    button.style.opacity = "1";
  }
});
play.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    button.style.opacity = "0";
    play.style.display = "none";
    stop.style.display = "inline";
  } else {
    button.style.opacity = "1";
  }
});
stop.addEventListener("click", function() {
  video.pause();
  play.style.display = "inline";
  stop.style.display = "none";
});
restart.addEventListener("click", function() {
  video.currentTime = 0;
});
rew.addEventListener("click", function() {
  video.currentTime += -10;
});
fastfwd.addEventListener("click", function() {
  video.currentTime += 10;
});
// Tab for projects
function slide(evt, types) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  evt.currentTarget.className += " active";
  document.getElementById(types).style.display = "block";
}
// Tab for steps
function tab(evt, steps) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(steps).style.display = "block";
  evt.currentTarget.className += " active";
}
// Tab for realization
function realization(evt, types) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.boxShadow = "none";
  }
  evt.currentTarget.className += " active";
  document.getElementById(types).style.boxShadow = "0px 0px 40px rgba(227, 184, 115, 1)";
}