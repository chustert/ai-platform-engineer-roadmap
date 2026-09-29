(function () {
  var KEY = 'aipe-roadmap-ticks';
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { state = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function count(list) {
    var n = 0; list.querySelectorAll('input[type=checkbox]').forEach(function (b) { if (b.checked) n++; });
    var d = list.querySelector('.done'); if (d) d.textContent = n;
  }
  document.querySelectorAll('.checklist').forEach(function (list) {
    list.querySelectorAll('input[type=checkbox]').forEach(function (b) {
      b.checked = !!state[b.dataset.key];
      b.addEventListener('change', function () { if (b.checked) state[b.dataset.key] = 1; else delete state[b.dataset.key]; save(); count(list); });
    });
    count(list);
  });
  var TOTAL = 103;
  function overall() {
    var el = document.getElementById('all-done'); if (!el) return;
    var n = Object.keys(state).length;
    el.textContent = n;
    var bar = document.getElementById('all-bar'); if (bar) bar.style.width = Math.min(100, n / TOTAL * 100) + '%';
  }
  document.querySelectorAll('.checks input').forEach(function (b) { b.addEventListener('change', overall); });
  overall();
  var reset = document.getElementById('reset-ticks'), armed = false, timer;
  if (reset) reset.addEventListener('click', function () {
    if (!armed) {
      armed = true; reset.textContent = 'Click again to clear every tick'; reset.classList.add('confirm');
      timer = setTimeout(function () { armed = false; reset.textContent = 'Clear all ticks'; reset.classList.remove('confirm'); }, 4000);
      return;
    }
    clearTimeout(timer); armed = false;
    state = {}; save();
    document.querySelectorAll('.checklist').forEach(function (list) { list.querySelectorAll('input').forEach(function (b) { b.checked = false; }); count(list); });
    overall();
    reset.textContent = 'Cleared'; reset.classList.remove('confirm');
    setTimeout(function () { reset.textContent = 'Clear all ticks'; }, 2000);
  });
})();
