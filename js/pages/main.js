// js/main.js
export function initHeroCarousel() {
  // Swiper가 정의되었는지 확인 후 실행
  if (typeof Swiper !== "undefined") {
    const swiper1 = new Swiper(".hero-swiper", {
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
const swiper1 = new Swiper(".hero-swiper", {
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

// placecarousel
export function initPlaceCarousel() {
  // Swiper가 정의되었는지 확인 후 실행
  if (typeof Swiper !== "undefined") {
  } else {
    console.error("Swiper is not defined. Check your CDN link.");
  }
}

const swiper2 = new Swiper(".place-swiper", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이의 간격 (px)
  loop: true, // 무한 반복 여부 (선택사항)

  // 네비게이션 버튼 설정
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 반응형 설정 (선택사항: 모바일에서는 1개만 보이게 하고 싶을 때)
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// 문화달력 날짜 버튼
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const posterCards = document.querySelectorAll(".poster-card");

  // 모든 카드를 처음에 보이게 설정 (초기화)
  posterCards.forEach((card) => (card.style.display = "block"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. 활성화된 탭 스타일 변경
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // 2. 클릭한 버튼의 날짜 값 가져오기
      const selectedDate = button.getAttribute("data-date");

      // 3. 필터링 로직
      posterCards.forEach((card) => {
        const cardDate = card.getAttribute("data-date");

        // 클릭한 버튼의 date와 카드의 date가 같으면 보이고, 다르면 숨김
        if (selectedDate === cardDate) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// 문화달력 carousel
export function initCalenderCarousel() {
  // Swiper가 정의되었는지 확인 후 실행
  if (typeof Swiper !== "undefined") {
  } else {
    console.error("Swiper is not defined. Check your CDN link.");
  }
}

const swiper3 = new Swiper(".calender-swiper", {
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 20, // 슬라이드 사이의 간격 (px)
  loop: true, // 무한 반복 여부 (선택사항)

  // 네비게이션 버튼 설정
  navigation: {
    nextEl: ".calender-carousel .swiper-button-next",
    prevEl: ".calender-carousel .swiper-button-prev",
  },

  // 반응형 설정 (선택사항: 모바일에서는 1개만 보이게 하고 싶을 때)
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
