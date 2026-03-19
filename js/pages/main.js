// js/main.js
export function initHeroCarousel() {
  // Swiper가 정의되었는지 확인 후 실행
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".hero-swiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    console.log("Swiper initialized!");
  } else {
    console.error("Swiper is not defined. Check your CDN link.");
  }
}

// Swiper 초기화
const swiper = new Swiper(".hero-swiper", {
  // 슬라이드 사이 간격
  loop: true, // 무한 루프 (재생이 멈추지 않게 하려면 권장)
  spaceBetween: 0,

  // 슬라이드 중앙 배치
  centeredSlides: true,

  // 자동 재생 설정
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // 유저가 건드려도 계속 재생
  },

  // 하단 페이지네이션(점) 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 양옆 버튼은 사용하지 않으므로 navigation 옵션은 삭제했습니다.
});
