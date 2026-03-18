document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".hero-swiper", {
    // 기본 옵션
    direction: "horizontal", // 슬라이드 방향
    loop: true, // 무한 반복

    // 페이지네이션 (점 표시)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // 네비게이션 화살표
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 자동 재생 (필요할 경우)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // 재생/정지 버튼 기능 연결
  const playBtn = document.querySelector(".play");
  const stopBtn = document.querySelector(".stop");

  playBtn.addEventListener("click", () => {
    swiper.autoplay.start();
  });

  stopBtn.addEventListener("click", () => {
    swiper.autoplay.stop();
  });
});
