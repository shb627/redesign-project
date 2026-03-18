const btn = document.getElementById("hamburger");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

const tabs = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".poster-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. 활성화 탭 표시 변경
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // 2. 날짜에 맞는 카드만 보여주기 (예시 로직)
    const selectedDate = tab.dataset.date;
    // 여기서 실제 데이터를 필터링하거나, 스와이퍼를 이동시키는 코드를 작성합니다.
  });
});
