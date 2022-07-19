// 마우스 스크롤 텍스트
$(function() {
    AOS.init({
        offset: 200,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom'
      });    
  
      AOS.init();

      //스크롤탑 버튼
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.gototop').addClass('active')
        } else {
          $('.gototop').removeClass('active')
        }
      })
})
// 마우스 커서
let cursor;
let green;
let blue;
let x=0, y=0;
let fx=0, fy=0;

window.onload = function() {
  cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", function(e){
    x = e.clientX;
    y = e.clientY;
    cursor.style.transform = "translate(" + x + "px, " + y + "px)";
  })

  repeat();
}

function repeat(){
  fx += (x - fx) * .09;
  fy += (y - fy) * .09;
  cursor.style.transform = "translate(" + fx + "px, " + fy + "px)";

  requestAnimationFrame(repeat);
}


document.addEventListener("DOMContentLoaded", function () {
  //동적 gnb
  window.onmousemove = function (e) {
    if (e.clientY < 100) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-80px";
    }
  };

  //setInterval 타이핑 효과
  let content = "파도와 함께 복지서핑을 시작해보세요!";
  let text = document.querySelector(".text");
  let i = 0;

  function typing() {
    text.innerHTML += content[i++];
    if (i > content.length) {
      text.innerHTML = ""
      i = 0;
    }
  }
  setInterval(typing, 200);
});

//프로그레스바
window.onscroll = function() {
  progressBar()
}

function progressBar() {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll/height) * 100;
  document.querySelector(".prog").style.width = scrolled + "%";
}

//이미지 갤러리
$(document).ready(function(){
  $('.vid_gal').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

