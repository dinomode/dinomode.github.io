const searchEl = document.querySelector('.search');
//document는 HTML이다

//swiper
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생
  loop: true, //반복재생
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

//하단swiper
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', -> 수평 문자데이터 / 기본값으로 명시되어 있어서 따로 적을필요없음
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

//배너숨기기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; //느낌표는 반대
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');
  } else {
    //보임처리!
    promotionEl.classList.remove('hide');
  }
});

//비쥬얼 떠 있는 이미지
