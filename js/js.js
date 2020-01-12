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

// Tabs
// let tab = function() {
//   let tabNav = document.querySelectorAll(".tab"),
//     tabContent = document.querySelectorAll(".tab-content"),
//     tabName;

//   tabNav.forEach(item => {
//     item.addEventListener("click", selectTabNav);
//   });

//   function selectTabNav() {
//     tabNav.forEach(item => {
//       item.classList.remove("slick-active");
//     });
//     this.classList.add("slick-active");
//     tabName = this.getAttribute("data-tab-name");
//     selectTabContent(tabName);
//   }

//   function selectTabContent(tabName) {
//     tabContent.forEach(item => {
//       item.classList.contains(tabName)
//         ? item.classList.add("slick-active")
//         : item.classList.remove("slick-active");
//     });
//   }
// };
// tab();

// document.querySelector(".tab-header").addEventListener("click", fTabs);

// function fTabs(event) {
//      if (event.target.className == "tab-h") {
//     let dataTab = event.target.getAttribute("data-tab");
//     let slickAct = document.querySelector(".slick-active");
//     console.log(slickAct);

//     // let tabBody = document.querySelectorAll(".tab-b");
//     // for (let i = 0; i < tabBody.length; i++) {
//       if (dataTab == slickAct) {
//         tabBody[i].style.display = "block";
//       } else {
//         tabBody[i].style.display = "none";
//       }
//     // }
//   }
// };

// function openCity(evt, cityName) {
//   let i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   // for (i = 0; i < tabcontent.length; i++) {
//   //   tabcontent[i].style.opacity = "0";
//   // }

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].className = tabcontent[i].className.replace(
//       " slick-current slick-active",
//       ""
//     );
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // document.getElementById(cityName).className = " slick-current slick-active";
//   // evt.currentTarget.className += " active";
// }


// Tab for projects


// function openCity(evt, cityName) {
//   let i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   tablinks = document.getElementsByClassName("tablinks");

//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   evt.currentTarget.className += " active";
//   document.getElementById(cityName).style.display = "block";
// }
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
