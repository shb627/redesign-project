// 불러오는거 확인 잘하기
import {
  initCalenderCarousel,
  initHeroCarousel,
  initPlaceCarousel,
} from "./pages/main.js";

window.addEventListener("load", () => {
  initHeroCarousel();
  initCalenderCarousel();
  initPlaceCarousel();
});
