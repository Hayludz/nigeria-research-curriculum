(function () {
  "use strict";

  var TRACKS = window.TRACKS, STEPS = window.SR_STEPS, GUIDES = window.GUIDELINES, DIR = window.DIRECTORY;
  var KEY = "rc-done", STEPKEY = "rc-steps";
  var state = { q: "", scope: "all", level: "all" };

  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  var done = new Set(store(KEY) || []);
  var stepsDone = new Set(store(STEPKEY) || []);

  function yt(q) { return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  var allTopics = [];
  TRACKS.forEach(function (tr) { tr.topics.forEach(function (t) { t.track = tr.id; allTopics.push(t); }); });
  var byId = {};
  allTopics.forEach(function (t) { byId[t.id] = t; });

  /* Progress */
  function updateProgress() {
    $("#progressPill").textContent = done.size + " of " + allTopics.length + " done";
  }

  /* Hero panel */
  var LEVEL_NOTES = {
    "Start here": "New to research? Begin with these topics, then move on.",
    "Core": "You have done some research. Strengthen methods, ethics and publishing.",
    "Advanced": "Ready for trials, meta-analysis, GRADE and larger grants."
  };
  function renderPath(level) {
    $("#levelNote").textContent = LEVEL_NOTES[level];
    var list = allTopics.filter(function (t) { return t.level === level; });
    var show = list.slice(0, 6);
    $("#pathList").innerHTML = show.map(function (t) {
      return '<li><a href="#t-' + t.id + '" data-open="' + t.id + '"><span>' + esc(t.title) + '</span><i class="ph ph-arrow-right" aria-hidden="true"></i></a></li>';
    }).join("") + (list.length > show.length
      ? '<li><a href="#library" data-level-filter="' + esc(level) + '"><span>See all ' + list.length + ' topics</span><i class="ph ph-arrow-right" aria-hidden="true"></i></a></li>'
      : "");
  }
  function renderStats() {
    var vids = 0;
    allTopics.forEach(function (t) { vids += t.g.length + t.n.length; });
    $("#stats").innerHTML =
      "<div><dd>" + allTopics.length + "</dd><dt>topics</dt></div>" +
      "<div><dd>" + vids + "</dd><dt>YouTube lesson lists</dt></div>" +
      "<div><dd>" + TRACKS.length + "</dd><dt>tracks</dt></div>";
  }
  $$(".level-tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      $$(".level-tabs button").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      renderPath(b.dataset.level);
    });
  });

  /* Library */
  function matches(t) {
    if (state.level !== "all" && t.level !== state.level) return false;
    if (state.scope === "global" && !t.g.length) return false;
    if (state.scope === "ng" && !t.n.length) return false;
    if (!state.q) return true;
    var hay = [t.title, t.summary, t.know.join(" "),
      t.g.map(function (v) { return v[0]; }).join(" "),
      t.n.map(function (v) { return v[0]; }).join(" "),
      t.r.map(function (v) { return v[0]; }).join(" ")].join(" ").toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function vidCol(title, items) {
    if (!items.length) return "";
    return '<div><h4>' + title + '</h4><div class="vlist">' + items.map(function (v) {
      return '<a class="vid" href="' + yt(v[1]) + '" target="_blank" rel="noopener noreferrer"><i class="ph ph-youtube-logo" aria-hidden="true"></i><span>' + esc(v[0]) + '</span></a>';
    }).join("") + "</div></div>";
  }

  function topicHtml(t) {
    var isDone = done.has(t.id);
    var showG = state.scope !== "ng", showN = state.scope !== "global";
    var cols = (showG ? vidCol("Watch: global", t.g) : "") + (showN ? vidCol("Watch: Nigeria context", t.n) : "");
    var one = (showG && showN) ? "" : " one";
    var refs = t.r.length ? '<div><h4>Read and use</h4><div class="refs">' + t.r.map(function (r) {
      return '<a class="ref" href="' + esc(r[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(r[0]) + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>';
    }).join("") + "</div></div>" : "";
    var lv = t.level === "Start here" ? "Start" : t.level;
    return '<details class="topic' + (isDone ? " done" : "") + '" id="t-' + t.id + '" data-id="' + t.id + '">' +
      '<summary><span class="t-check" aria-hidden="true"><i class="ph ph-check"></i></span>' +
      '<span class="t-main"><span class="t-title">' + esc(t.title) + '</span>' +
      '<span class="t-meta"><span class="chip lv-' + lv + '">' + esc(t.level) + '</span></span></span>' +
      '<i class="ph ph-caret-down t-caret" aria-hidden="true"></i></summary>' +
      '<div class="t-body"><p class="t-sum">' + esc(t.summary) + '</p>' +
      '<div><h4>What you need to know</h4><ul class="know">' + t.know.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="vids' + one + '">' + cols + "</div>" + refs +
      '<button type="button" class="done-btn" data-done="' + t.id + '" aria-pressed="' + isDone + '"><i class="ph ph-check-circle" aria-hidden="true"></i><span>' + (isDone ? "Done" : "Mark as done") + "</span></button>" +
      "</div></details>";
  }

  function renderLibrary() {
    var out = "", side = "", total = 0;
    TRACKS.forEach(function (tr) {
      var list = tr.topics.filter(matches);
      if (!list.length) return;
      total += list.length;
      out += '<section class="track" id="track-' + tr.id + '" aria-labelledby="h-' + tr.id + '">' +
        '<div class="track-head"><h3 id="h-' + tr.id + '">' + esc(tr.title) + "</h3><p>" + esc(tr.blurb) + "</p></div>" +
        '<div class="topics">' + list.map(topicHtml).join("") + "</div></section>";
      side += '<a href="#track-' + tr.id + '" data-track="' + tr.id + '"><span>' + esc(tr.title) + '</span><span class="count">' + list.length + "</span></a>";
    });
    $("#results").innerHTML = out;
    $("#side").innerHTML = side;
    $("#empty").hidden = total !== 0;
    observeTracks();
  }

  var io;
  function observeTracks() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id.replace("track-", "");
          $$("#side a").forEach(function (a) { a.classList.toggle("cur", a.dataset.track === id); });
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    $$(".track").forEach(function (s) { io.observe(s); });
  }

  /* Events */
  var timer;
  $("#q").addEventListener("input", function (e) {
    clearTimeout(timer);
    var v = e.target.value.trim();
    timer = setTimeout(function () { state.q = v; renderLibrary(); }, 120);
  });
  $("#levelSel").addEventListener("change", function (e) { state.level = e.target.value; renderLibrary(); });
  $$(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      state.scope = b.dataset.scope;
      $$(".seg button").forEach(function (x) {
        var on = x === b;
        x.classList.toggle("on", on);
        x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      renderLibrary();
    });
  });
  $("#clearBtn").addEventListener("click", function () {
    state = { q: "", scope: "all", level: "all" };
    $("#q").value = ""; $("#levelSel").value = "all";
    $$(".seg button").forEach(function (x) {
      var on = x.dataset.scope === "all";
      x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderLibrary();
  });

  function saveDone() { store(KEY, Array.from(done)); updateProgress(); }

  document.addEventListener("click", function (e) {
    var d = e.target.closest("[data-done]");
    if (d) {
      var id = d.dataset.done;
      if (done.has(id)) done.delete(id); else done.add(id);
      var el = document.getElementById("t-" + id);
      var on = done.has(id);
      el.classList.toggle("done", on);
      d.setAttribute("aria-pressed", on);
      $("span", d).textContent = on ? "Done" : "Mark as done";
      saveDone();
      return;
    }
    var o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); openTopic(o.dataset.open); return; }
    var lf = e.target.closest("[data-level-filter]");
    if (lf) {
      state.level = lf.dataset.levelFilter;
      $("#levelSel").value = state.level;
      renderLibrary();
    }
  });

  function openTopic(id) {
    var el = document.getElementById("t-" + id);
    if (!el) {
      state = { q: "", scope: "all", level: "all" };
      $("#q").value = ""; $("#levelSel").value = "all";
      $$(".seg button").forEach(function (x) {
        var on = x.dataset.scope === "all";
        x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      renderLibrary();
      el = document.getElementById("t-" + id);
    }
    if (!el) return;
    el.open = true;
    history.replaceState(null, "", "#t-" + id);
    el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  window.addEventListener("hashchange", function () {
    var m = location.hash.match(/^#t-(.+)$/);
    if (m && byId[m[1]]) openTopic(m[1]);
  });

  /* Systematic review path */
  function renderSteps() {
    $("#steps").innerHTML = STEPS.map(function (s, i) {
      var key = String(i), on = stepsDone.has(key);
      var t = byId[s.topic];
      return '<li class="step' + (on ? " done" : "") + '"><span class="step-n" aria-hidden="true"></span><div>' +
        "<h3>" + esc(s.t) + "</h3><p>" + esc(s.d) + "</p>" +
        '<div class="step-actions">' +
        (t ? '<a href="#t-' + t.id + '" data-open="' + t.id + '">Open lesson <i class="ph ph-arrow-right" aria-hidden="true"></i></a>' : "") +
        '<label><input type="checkbox" data-step="' + key + '"' + (on ? " checked" : "") + "> Completed</label>" +
        "</div></div></li>";
    }).join("");
  }
  document.addEventListener("change", function (e) {
    var s = e.target.closest("[data-step]");
    if (!s) return;
    if (s.checked) stepsDone.add(s.dataset.step); else stepsDone.delete(s.dataset.step);
    s.closest(".step").classList.toggle("done", s.checked);
    store(STEPKEY, Array.from(stepsDone));
  });

  /* Guideline finder */
  function renderGuide(i) {
    var g = GUIDES[i];
    $("#gOut").innerHTML =
      "<h3>" + esc(g.g) + "</h3><dl>" +
      "<dt>Study type</dt><dd>" + esc(g.s) + "</dd>" +
      "<dt>Appraisal tool</dt><dd>" + esc(g.a) + "</dd>" +
      "<dt>Good to know</dt><dd>" + esc(g.n) + "</dd></dl>" +
      '<div class="out-actions"><a class="btn btn-primary" href="' + esc(g.u) + '" target="_blank" rel="noopener noreferrer">Open the checklist</a>' +
      '<a class="btn btn-ghost" href="' + yt(g.g + " reporting guideline tutorial how to use") + '" target="_blank" rel="noopener noreferrer">Watch a tutorial</a></div>';
  }
  $("#gSel").innerHTML = GUIDES.map(function (g, i) { return '<option value="' + i + '">' + esc(g.s) + "</option>"; }).join("");
  $("#gSel").addEventListener("change", function (e) { renderGuide(+e.target.value); });

  /* Directory */
  $("#dir").innerHTML = DIR.map(function (grp) {
    return "<div><h3>" + esc(grp.c) + "</h3><ul>" + grp.i.map(function (it) {
      return '<li><a href="' + esc(it[1]) + '" target="_blank" rel="noopener noreferrer"><strong>' + esc(it[0]) + ' <i class="ph ph-arrow-up-right" aria-hidden="true"></i></strong><span>' + esc(it[2]) + "</span></a></li>";
    }).join("") + "</ul></div>";
  }).join("");

  /* Theme */
  $("#themeBtn").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.getAttribute("data-theme");
    var isDark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("rc-theme", next); } catch (e) {}
  });

  /* Init */
  renderStats();
  renderPath("Start here");
  renderLibrary();
  renderSteps();
  renderGuide(0);
  updateProgress();
  var m = location.hash.match(/^#t-(.+)$/);
  if (m && byId[m[1]]) openTopic(m[1]);
})();
