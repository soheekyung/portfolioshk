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
});

var close1 = document.querySelector("#close1");
close1.addEventListener("click", function() {
  document.querySelector(".open1-1").style.width = "0%";
  document.querySelector("#close1").style.display = "none";
});

const button = document.querySelector('.navigation-button');
const menu = document.querySelector('.navigation-menu');

button.addEventListener('click', function() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});



$(document).ready(function(){
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());
    //년도 selectbox만들기
    for(var i = 1900 ; i <= year ; i++) {
        $('#year').append('<option value="' + i + '">' + i + '년</option>');
    }

    // 월별 selectbox 만들기
    for(var i=1; i <= 12; i++) {
        var mm = i > 9 ? i : "0"+i ;
        $('#month').append('<option value="' + mm + '">' + mm + '월</option>');
    }

    // 일별 selectbox 만들기
    for(var i=1; i <= 31; i++) {
        var dd = i > 9 ? i : "0"+i ;
        $('#day').append('<option value="' + dd + '">' + dd+ '일</option>');
    }
    $("#year  > option[value="+year+"]").attr("selected", "true");
    $("#month  > option[value="+mon+"]").attr("selected", "true");
    $("#day  > option[value="+day+"]").attr("selected", "true");

})
