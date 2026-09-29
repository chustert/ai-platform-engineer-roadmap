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
  var reset = document.getElementById('reset-ticks');
  if (reset) reset.addEventListener('click', function () {
    state = {}; save();
    document.querySelectorAll('.checklist').forEach(function (list) { list.querySelectorAll('input').forEach(function (b) { b.checked = false; }); count(list); });
  });
})();
