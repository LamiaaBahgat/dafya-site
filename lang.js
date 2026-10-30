// اختيار اللغة: من الرابط (?lang=en) أو آخر اختيار، أو لغة الجهاز
(function () {
  var h = document.documentElement, q = new URLSearchParams(location.search).get("lang"), saved = null;
  try { saved = localStorage.getItem("dafya-site-lang"); } catch (e) {}
  var lang = q || saved || ((navigator.language || "").slice(0, 2) === "ar" ? "ar" : "en");
  function set(l) {
    h.lang = l; h.dir = l === "ar" ? "rtl" : "ltr";
    var t = document.querySelector("[data-title-" + l + "]");
    if (t) document.title = t.getAttribute("data-title-" + l);
    var b = document.getElementById("langBtn"); if (b) b.textContent = l === "ar" ? "English" : "العربية";
    try { localStorage.setItem("dafya-site-lang", l); } catch (e) {}
  }
  set(lang === "en" ? "en" : "ar");
  // الوضع الفاتح هو الأساسي، والزرار بيبدّل للّيلي ويفتكر الاختيار
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="#f0a73a" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5" fill="#f0a73a" stroke="none"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3 7 7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="#ffd35c"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var theme = "light"; try { theme = localStorage.getItem("dafya-site-theme") || "light"; } catch (e) {}
  function setTheme(t) {
    theme = t; if (t === "dark") h.setAttribute("data-theme", "dark"); else h.removeAttribute("data-theme");
    var b = document.getElementById("themeBtn"); if (b) b.innerHTML = t === "dark" ? MOON : SUN;
    try { localStorage.setItem("dafya-site-theme", t); } catch (e) {}
  }
  setTheme(theme);
  document.addEventListener("DOMContentLoaded", function () { setTheme(theme); set(h.lang); });
  document.addEventListener("click", function (e) {
    if (e.target.closest("#langBtn")) set(h.lang === "ar" ? "en" : "ar");
    if (e.target.closest("#themeBtn")) setTheme(theme === "dark" ? "light" : "dark");
  });
})();
