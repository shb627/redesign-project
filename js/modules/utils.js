/**
 * utils.js 공용 유틸리티 함수 모듈
 *
 * 이 모듈은 여러 페이지에서 공통으로 사요되는 유틸리티 함수들을 제공합니다.
 * 포맷팅, 변환, UI헬퍼(별 등등) 함수 등이 포함되어있습니다.
 *
 * @module utils
 */

//가격 포맷팅 함수 ================================
/**
 * 숫자 가격을 한국 원화 형식 문자열로 변환합니다
 * 0원일 경우 "무료"를 반환합니다
 *
 * @param {number} price 변환할 가격
 * @returns {string} 포맷된 가격 문자열
 * @example
 * formatPrice(49000); // ₩49,000원
 * formatPrice(0); // 무료
 */
export function formatPrice(price) {
  if (price === 0) {
    return "무료";
  }

  return `₩${price.toLocaleString("ko-KR")}원`;
}

// 별점 렌더링 함수 ============
/**
 * 평점을 별 아이콘 HTML 문자열로 반환합니다
 * 꽉 찬 별, 반 별
 *
 * @param {number} rating 평점 (0 ~ 5)
 * @returns {string} 별 아이콘 HTML 문자열
 */
export function renderStars(rating) {
  const fillStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let html = "";

  // 꽉 찬 별 추가
  for (let i = 0; i < fillStars; i++) {
    html += `
    <span class="star filled">
             <i class="fa-solid fa-star"></i>
            </span>`;
  }

  // 반 별 추가
  if (hasHalfStar) {
    html += `
    <span class="star half">
             <i class="fa-solid fa-star-half"></i>
            </span>`;
  }

  return html;
}

// URL 파라미터 관련 함수 ====================================
/**
 * URL 쿼리 파라미터 값을 가져옵니다
 *
 * @param {string} name 파라미터 이름
 * @return {string|null} 파라미터 값 또는 null
 * @example
 * // URL: /course-detail?id=3
 * getQuery
 */

export function getQueryParam(name) {
  const urlPrams = new URLSearchParams(window.location.search);
  return urlPrams.get(name);
}

// 시간/재생 시간 포맷팅 함수 =============
/**
 * ch eksdnl tlrksdmf "x시간 y분" 형식으로 변환합니다.
 * 1시간 미만인 경우 "y분" 형식으로 반환합니다.
 *
 * 시간이니 받아야 할게 넘버
 * @param {number} seconds 변환할 시간 (초)
 * @returns {srting} 포맷된 시간 문자열
 * @example
 * formatDuration(3661); // 1시간 1분
 * formatDuration(1800); // 30분
 * formatDuration(90); // 1분
 */
// seconsd를 받는다
export function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}시간 ${minutes}분`;
  }

  return `${minutes}분`;
}
