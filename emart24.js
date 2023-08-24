$(".que").click(function() {
  $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});


var _navOpen = document.querySelector("#navOpen");
_navOpen.addEventListener("click", function() {
  document.querySelector("#nav").style.width = "50%";
  document.querySelector("#nav").style.right = "0";
  document.querySelector("#nav").style.boxShadow = "rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px";
  document.querySelector("#close1").style.display = "none";
});

var _navClose = document.querySelector("#navClose");
_navClose.addEventListener("click", function() {
  document.querySelector("#nav").style.width = "0%";
  document.querySelector("#navOpen").style.display = "block";
  document.querySelector("#nav").style.boxShadow = "none";
});

var open = document.querySelector("#open1");
open.addEventListener("click", function() {
  document.querySelector(".open1-1").style.width = "100%";
  document.querySelector(".open1-1").style.right = "0";
  document.querySelector("#close1").style.display = "block";
  document.querySelector("#navClose").style.display = "none";
});

var close1 = document.querySelector("#close1");
close1.addEventListener("click", function() {
  document.querySelector(".open1-1").style.width = "0%";
  document.querySelector("#close1").style.display = "none";
  document.querySelector("#navClose").style.display = "block";
});

const button = document.querySelector('.navigation-button');
const menu = document.querySelector('.navigation-menu');

button.addEventListener('click', function() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});



$(document).ready(function() {
        AOS.init();
      });



$(function() {
  var swiper = new Swiper(".swiper-box1 .swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: { // 자동 슬라이드
      delay: 3000, // 5초마다 슬라이드 이동
    },
  });
});




$(document).ready(function() {
  $('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});






let w = window.innerWidth;
if (w >= 1366) {
  $(document).ready(function() {
    $('.multiple-items').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      centerMode: true,
      variableWidth: true
    });
  });
}





document.querySelector('#btn1').addEventListener('click', function() {
  document.querySelector('#product1').style.display = 'block';
  document.querySelector('#product2').style.display = 'none';
    document.querySelector('#product3').style.display = 'none';
});


document.querySelector('#btn2').addEventListener('click', function() {
  document.querySelector('#product1').style.display = 'none';
  document.querySelector('#product2').style.display = 'block';
    document.querySelector('#product3').style.display = 'none';
});

document.querySelector('#btn3').addEventListener('click', function() {
  document.querySelector('#product1').style.display = 'none';
  document.querySelector('#product2').style.display = 'none';
    document.querySelector('#product3').style.display = 'block';
});




function show() {
  document.getElementById('sidebar').classList.toggle('active');

  var btn = document.querySelector(".toggle-btn div");
  var tab = document.querySelector('.tab');
  if (btn.innerHTML === "창업문의") {
    btn.innerHTML = "닫기";
    document.querySelector('#stars').style.display = 'block';
    tab.classList.add('show'); // show 클래스 추가
  } else {
    btn.innerHTML = "창업문의";
    document.querySelector('#stars').style.display = 'none';
    tab.classList.remove('show'); // show 클래스 제거
  }
}







function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.querySelector('.tab button').click();




$(function() {
  var swiper = new Swiper(".swiper-box2 .swiper", {
    slidePerView: 2,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: { // 자동 슬라이드
      delay: 3000, // 5초마다 슬라이드 이동
    },
  });
});
