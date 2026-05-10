const mbMenuBtn = document.querySelector(".mb-menu-btn");
const mbCloseBtn = document.querySelector(".mb-close-btn");
const mbMenuList = document.querySelector(".mb-menu-list");

if (mbMenuBtn && mbCloseBtn && mbMenuList) {
  // 초기 상태 설정
  mbCloseBtn.style.display = "none";
  mbMenuList.style.display = "none";

  // 햄버거 버튼 클릭 → 메뉴 열기
  mbMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mbMenuBtn.style.display = "none";
    mbCloseBtn.style.display = "block";
    mbMenuList.style.display = "flex";
  });

  // X 버튼 클릭 → 메뉴 닫기
  mbCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mbMenuBtn.style.display = "block";
    mbCloseBtn.style.display = "none";
    mbMenuList.style.display = "none";
  });
}

// dropdown
export function dropDown() {
  const searchBox = document.querySelector("#searchBox");
  const searchInput = document.querySelector("#searchInput");
  const searchDropdown = document.querySelector("#searchDropdown");

  // input 클릭하면 dropdown 열기
  searchInput.addEventListener("click", () => {
    searchDropdown.classList.add("show");
  });

  // 바깥 클릭하면 dropdown 닫기
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
      searchDropdown.classList.remove("show");
    }
  });
}

export function menuDropDown() {}

export function initHeroCarousel() {
  // Swiper가 정의되었는지 확인 후 실행
  if (typeof Swiper !== "undefined") {
    const swiper1 = new Swiper(".hero-swiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 0,
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
  autoplay: true,

  // 네비게이션 버튼 설정
  navigation: {
    nextEl: ".fa-chevron-right",
    prevEl: ".sfa-chevron-left",
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
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 16, // 슬라이드 사이의 간격 (px)
  loop: true, // 무한 반복 여부 (선택사항)

  // 네비게이션 버튼 설정
  navigation: {
    nextEl: ".calender-carousel .swiper-nav-next",
    prevEl: ".calender-carousel .swiper-nav-prev",
  },

  // 반응형 설정 (선택사항: 모바일에서는 1개만 보이게 하고 싶을 때)
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});
