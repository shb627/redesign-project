/**
 * storage.js 로컬스토리지 및 세션스토리지 관리 모듈
 * 강의, 사용자 데이터, 수강정보 를 관리하는 함수들을 제공합니다.
 *
 * @module storage
 */

// 상수 정의 (스토리지 키)=================================
//이 코드는 **"로컬 스토리지에 'courses'라는 이름으로 데이터를 저장할 건데, 오타 내기 싫으니까 COURSES_KEY라는 이름의 상수에 담아서 안전하게 관리하겠다"**는 선언입니다.
/** @constant {string} 강의 데이터 저장 키 */
const COURSES_KEY = "courses";

/** @constant {string} 사용자 목록 저장 키 */
const USERS_KEY = "users";

// 유틸리티 함수(storage.js 내부에서 쓰는 함수))====================
/**
 * LocalStorage 에서 JSON 데이터를 가져옵니다.
 * 파싱 실패시 기본값을 반환합니다
 *
 *
 * @param {string} key - localStorage에서 조회할 항목의 키 문자열 (예: 'courses', 'users')
 * @param {*} [defaultValue=null] - 데이터가 없거나 JSON 파싱 실패 시 반환할 기본값
 * @returns {*} 파싱된 데이터 또는 기본값
 */
//null <- 없으면 null로 해라
// 파라미터를 두개 받는다 try 하고 실패하면 catch 한다
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(error, `[Storage] ${key} 데이터 파싱 실패`);
    return defaultValue;
  }
}

/**
 * localStorage에 JSON 데이터를 저장합니다.
 *
 * @param {string} key - localStorage에 저장할 항목의 키 문자열 (예: 'courses', 'users')
 * @param {*} value - 저장할 데이터. JSON.stringify로 직렬화되어 저장됨 (객체, 배열 등)
 */
function setToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error, `[Storage] ${key} 데이터 저장 실패`);
  }
}

//강의 데이터 관련 함수====================

/**
 * 모든 강의 목록을 가져옵니다.
 *
 * @returns {Array<Object>} 강의 객체 베열
 * @example
 * const courses = getCourses();
 * console.log(courses[0].title); //첫번재 강의 제목
 */
export function getCourses() {
  return getFromStorage(COURSES_KEY, []);
}

/**
 * 강의 목록을 저장합니다.
 * courses라는 {배열} 을 담고있다
 * @param {Array<Object>} courses - 저장할 강의 객체 배열 (id, title 등 강의 정보를 담은 객체들)
 */
// "courses라는 이름의 강의 목록을 가져와서,
// 정해진 열쇠(COURSES_KEY)로 창고(Storage)에 저장한다."
export function saveCourses(courses) {
  setToStorage(COURSES_KEY, courses);
}

/**
 * ID로 특정 강의를 찾습니다.
 *
 * @param {number} courseId - 조회할 강의의 고유 식별자 (course.id와 일치하는 값)
 * @returns {Object|undefined} 강의 객체 또는 undefined
 */
export function getCourseById(courseId) {
  const courses = getCourses();
  return courses.find((course) => course.id === courseId);
}
