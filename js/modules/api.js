/**
 * api.js 데이터 API 모듈
 *
 * 이 모듈은 JSON 파일에서 초기데이터를 로드하고,
 * 로컬 스토리지와 연동하여 데이터를 관리합니다.
 * 실제 서버 API가 있다면 이 모듈에서 fetch 호출을 관리합니다.
 *
 * @module api
 */

import { getCourses, saveCourses } from "./storage.js";

// 상수 정의 ================오타안내려고=======
/** @constant {string} 강의 데이터 JSON 파일 경로 */
const COURSES_DATA_PATH = "data/courses.json";
/** @constant {string} 사용자 데이터 JSON 파일 경로 */
const USERS_DATA_PATH = "data/users.json";
/** @constant {boolean} 데이터 초기화 완료 여부 */
let isInitialized = false;

// 데이터 로드 함수================
/**
 * JSON 파일에서 데이터를 **비동기적으로(async await)** 로드합니다.
 *
 * @param {string} path JSON 파일 경로
 * @returns {Promise<*>}파싱된 JSON 데이터
 * @example
 * const data = await fetchJSON(path);
 */
async function fetchJSON(path) {
  try {
    const response = await fetch(path);

    return response.json();
  } catch (error) {
    console.error(error, `[API] JSON 파일 로드 실패 (${path})`);
  }
}

/**
 * 강의 데이터를 JSON 파일에서 로드합니다.
 * JSON 파일의 데이터가 더 많거나, localStorage가 비어있으면 업데이트합니다.
 *
 * @returns {Promise<Array>} 강의 데이터 배열
 */
export async function loadCoursesData() {
  try {
    const jsonCourses = await fetchJSON(COURSES_DATA_PATH);
    const existingCourses = getCourses();

    //JSON 데이터가 더 많거나, localStorage가 비어있으면 업데이트
    if (
      jsonCourses.length > existingCourses.length ||
      existingCourses.length === 0
    ) {
      saveCourses(jsonCourses);
      return jsonCourses;
    }

    return existingCourses;
  } catch (error) {
    console.error(error, "[API] 강의 데이터 로드 실패");
    return getCourses();
  }
}

// 데이터 초기화 함수 ===========================================================
/**
 * 애플리케이션 시작 시 필요한 모든 초기 데이터를 로드합니다.
 * 이 함수는 앱 시작 시 한 번만 호출되어야 합니다.
 *
 * @returns {Promise<Object>} 로드된 데이터 객체 {courses, users}
 * @example
 * // 앱 시작 시
 * await initializeData();
 */
export async function initializeData() {
  // 이미 초기화되었으면 건너뛰기
  if (isInitialized) {
    return {
      courses: getCourses(),
      users: null,
    };
  }

  try {
    // 배열 구조 분해 할당
    // 병렬로 데이터 로드
    const [courses, users] = await Promise.all([loadCoursesData(), null]);

    isInitialized = true;

    return { courses, users };
  } catch (error) {
    console.error(error, "[API] 데이터 초기화 실패");
  }
}

// 강의 관련 API 함수 ===============================
/**
 * 인기강의 목록을 가져옵니다.
 * param 받아와야할거는 - number
 * @param {number} limit 가져올 강의 수 (기본값: 10)
 * @returns {Array} 인기 강의 배열
 */
export function getPopularCourses(limit = 10) {
  const courses = getCourses();
  // 인덱스 번호 0 부터 19까지 = 20 - 잘라서 준다
  return courses.slice(0, limit);
}
