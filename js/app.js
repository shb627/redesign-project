// 불러오는거 확인 잘하기
import {
  dropDown,
  initCalenderCarousel,
  initHeroCarousel,
  initPlaceCarousel,
} from "./pages/main.js";

window.addEventListener("load", () => {
  initHeroCarousel();
  initCalenderCarousel();
  initPlaceCarousel();
  dropDown();
});
