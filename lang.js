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
  document.addEventListener("click", function (e) {
    if (e.target.id === "langBtn") set(h.lang === "ar" ? "en" : "ar");
  });
})();
