(function($){
  //console.log($);

//마우스 + 키보드 접근성 고려한 것 ! 
//객체(object) 형식의 이벤트
$('.main-btn').on({
  mouseenter: function(){ 
    $('.sub').stop().fadeOut(0);
    $(this).next().stop().fadeIn(300);

    $('.main-btn').removeClass('on');
    $(this).addClass('on');
  },
  focusin: function(){
    $('.sub').stop().fadeOut(0);
    $(this).next().stop().fadeIn(300);

    $('.main-btn').removeClass('on');
    $(this).addClass('on');
  }
});


$('#nav').on({
  mouseleave : function(){
    $('.sub').stop().fadeOut(300);
    $('.main-btn').removeClass('on');
  }
})


let cnt=0;
const slideWrap = $('.slide-wrap'); //값이 변경된게 없음
const n = 3-1; //전체슬라이드 갯수 빼기 -1 , 상수값 변화가 없음
//1.메인슬라이드 함수
function mainSlide(){
  //console.log(cnt);
  slideWrap.animate({left: `${-100*cnt}%`},600,function(){
    cnt>n?cnt=0:cnt;
    slideWrap.animate({left: `${-100*cnt}%`},0);
  });
}
//2. 다음카운트 함수
function nextCount(){
  cnt++;
  mainSlide();
}
//3. 자동타이머함수
function autoTimer(){
  setInterval(nextCount,3000);
}
autoTimer();  //콘솔확인했으면 일단 꺼놔.완료되면 풀어주기

/* 공지사항 notice & 갤러리 탭메뉴 클릭 이벤트 
 공지사항 눌러져있으니까 갤러리 버튼부터 작업 */
 //갤러리버튼 모두 온 추가
$('.gallery-btn').on({
  click: function(){ // 마우스 클릭 그리고 키보드는 엔터(Enter)
    $('.notice-btn').addClass('on');
    $('.gallery-btn').addClass('on');
    $('.notice-box').addClass('on');
    $('.gallery-box').addClass('on');
  }
});
//공지사항버튼
$('.notice-btn').on({  // 마우스 클릭 그리고 키보드는 엔터(Enter)
  click: function(){
    $('.notice-btn').removeClass('on');
    $('.gallery-btn').removeClass('on');
    $('.notice-box').removeClass('on');
    $('.gallery-box').removeClass('on');
  }
});










//레이어팝업창 
$('.link-btn').on({ // 마우스 클릭 그리고 키보드는 엔터(Enter)
  click: function(){
    $('#modal').stop().fadeIn(300);
  }
});

//레이어팝업창 닫기
$('.close-btn').on({
  click : function(){
    $('#modal').stop().fadeOut(300);
  }
});


  

})(jQuery);