// 단축어 '웹 페이지에서 JavaScript 실행' 칸에 그대로 붙여 넣는 코드 (호서 LMS 체크)
// LMS 화면에 GitHub의 최신 스크립트를 넣어 할 일 화면을 띄운다. 비밀번호는 다루지 않는다.
(function () {
  var LMS = 'https://learn.hoseo.ac.kr';
  var PAGES = 'https://selfhiam.github.io/Iphone_hoseo_LMS_checker/hoseo-lms-check.user.js';
  var RAW = 'https://raw.githubusercontent.com/selfhiam/Iphone_hoseo_LMS_checker/main/hoseo-lms-check.user.js';
  var finished = false;
  function done(result) {
    if (finished) return;
    finished = true;
    completion(result);
  }
  if (location.origin !== LMS) {
    location.href = LMS + '/my/';
    done('LMS를 열었어요. 화면이 뜨면 단축어를 한 번 더 실행해 주세요.');
    return;
  }
  function add(script) {
    script.setAttribute('data-hlc-inject', '1');
    document.documentElement.appendChild(script);
  }
  var s = document.createElement('script');
  s.src = PAGES + '?t=' + Date.now();
  s.onload = function () { done('ok'); };
  s.onerror = function () {
    // GitHub Pages가 안 되면 저장소 파일을 직접 받아 넣는다
    fetch(RAW + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (code) {
        var inline = document.createElement('script');
        inline.textContent = code;
        add(inline);
        done('ok');
      })
      .catch(function () { done('스크립트를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.'); });
  };
  add(s);
  setTimeout(function () { done('ok'); }, 2500);
})();
