/* ============================================================================
   Deck engine: render, navigate, language toggle, PDF export, overview grid.
   ============================================================================ */
(function () {
  const deck = document.getElementById('deck');
  const counter = document.getElementById('counter');
  const progressFill = document.getElementById('progress-fill');
  const ovWrap = document.getElementById('overview');
  const ovGrid = document.getElementById('overview-grid');
  const total = SLIDES.length;
  let idx = 0;

  // --- presenter / clicker sync ----------------------------------------------
  // role=audience  → clean projector window opened by the presenter console
  // (no role)      → normal deck; can also become the controller console
  const params = new URLSearchParams(location.search);
  const role = params.get('role');               // 'audience' | null
  const isAudience = role === 'audience';
  let bc = null;                                  // BroadcastChannel between the two windows
  try { bc = new BroadcastChannel('owb-sync:' + location.pathname); } catch (_) {}
  let applyingRemote = false;                     // guard so echoed messages don't loop
  let presenterOn = false;                        // this window is the controller console
  let audienceWin = null;                         // the projector window we opened

  // --- decorative animated wave background ----------------------------------
  const wave = document.createElement('div');
  wave.className = 'wave-bg';
  wave.innerHTML = `<svg viewBox="0 0 1200 200" preserveAspectRatio="none">
    <path fill="rgba(0,180,216,0.10)"><animate attributeName="d" dur="11s" repeatCount="indefinite"
      values="M0,80 C300,140 600,20 1200,90 L1200,200 L0,200 Z;
              M0,100 C300,40 600,150 1200,70 L1200,200 L0,200 Z;
              M0,80 C300,140 600,20 1200,90 L1200,200 L0,200 Z"/></path>
    <path fill="rgba(111,212,36,0.08)"><animate attributeName="d" dur="15s" repeatCount="indefinite"
      values="M0,120 C400,60 800,170 1200,110 L1200,200 L0,200 Z;
              M0,110 C400,160 800,50 1200,130 L1200,200 L0,200 Z;
              M0,120 C400,60 800,170 1200,110 L1200,200 L0,200 Z"/></path>
  </svg>`;
  document.body.appendChild(wave);

  // --- build slides ----------------------------------------------------------
  SLIDES.forEach((s, i) => {
    const el = document.createElement('section');
    el.className = 'slide' + (s.cls ? ' ' + s.cls : '');
    el.dataset.index = i;
    el.innerHTML = s.html +
      `<div class="sbrand">Jejakin × Ocean Week Brunei 2026</div>` +
      `<div class="snum">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>`;
    // Lazy-load every slide's images except the title's, so the deck shows instantly instead of
    // fetching all ~20–30 slides' images up front. Hidden slides (display:none) defer until shown.
    if (i !== 0) el.querySelectorAll('img').forEach(im => { im.loading = 'lazy'; im.decoding = 'async'; });
    deck.appendChild(el);
  });
  const slideEls = Array.from(document.querySelectorAll('.slide'));

  // --- navigation ------------------------------------------------------------
  function show(n, dir) {
    n = Math.max(0, Math.min(total - 1, n));
    slideEls.forEach((el, i) => {
      el.classList.remove('active', 'leaving');
      if (i === n) el.classList.add('active');
    });
    idx = n;
    counter.textContent = (n + 1) + ' / ' + total;
    progressFill.style.width = ((n + 1) / total * 100) + '%';
    if (location.hash !== '#' + (n + 1)) history.replaceState(null, '', '#' + (n + 1));
    if (bc && !applyingRemote) bc.postMessage({ type: 'goto', n: n });
    if (presenterOn) updatePresenter();
  }
  const next = () => show(idx + 1);
  const prev = () => show(idx - 1);

  document.getElementById('next').onclick = next;
  document.getElementById('prev').onclick = prev;

  document.addEventListener('keydown', (e) => {
    if (!ovWrap.classList.contains('hidden')) { if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') toggleOverview(); return; }
    switch (e.key) {
      case 'ArrowRight': case ' ': case 'PageDown': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
      case 'Home': show(0); break;
      case 'End': show(total - 1); break;
      case 'l': case 'L': toggleLang(); break;
      case 'o': case 'O': toggleOverview(); break;
      case 'p': case 'P': exportPDF(); break;
      case 'F5': e.preventDefault(); presentFull(); break;      // clickers often map "start" to F5
      case 'b': case 'B': case '.': e.preventDefault(); toggleBlack(); break; // clicker blank-screen key
    }
  });

  // touch swipe
  let tx = 0;
  deck.addEventListener('touchstart', e => tx = e.changedTouches[0].clientX, { passive: true });
  deck.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  }, { passive: true });

  // --- language toggle -------------------------------------------------------
  function setLang(l) {
    document.documentElement.dataset.lang = l;
    document.documentElement.lang = l;
    try { localStorage.setItem('owb-lang', l); } catch (_) {}
    if (bc && !applyingRemote) bc.postMessage({ type: 'lang', l: l });
  }
  function toggleLang() { setLang(document.documentElement.dataset.lang === 'en' ? 'id' : 'en'); }
  document.getElementById('lang-toggle').onclick = toggleLang;
  setLang('en'); // always open in English (default); toggle still works in-session

  // --- PDF export ------------------------------------------------------------
  function exportPDF() { window.print(); }
  document.getElementById('pdf-btn').onclick = exportPDF;
  // hero button is rendered inside slide 1
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'pdf-btn-hero') exportPDF();
  });

  // --- overview grid ---------------------------------------------------------
  SLIDES.forEach((s, i) => {
    const c = document.createElement('div');
    c.className = 'ov-card';
    c.innerHTML = `<div class="ov-n">${String(i + 1).padStart(2, '0')}</div>
      <div class="ov-t"><span class="en">${s.title.en}</span><span class="id">${s.title.id}</span></div>`;
    c.onclick = () => { toggleOverview(); show(i); };
    ovGrid.appendChild(c);
  });
  function toggleOverview() { ovWrap.classList.toggle('hidden'); }
  document.getElementById('overview-btn').onclick = toggleOverview;

  // --- image lightbox (click to enlarge; ‹ › navigate; Esc / × close) --------
  const lb = document.createElement('div');
  lb.className = 'lightbox hidden';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">×</button>' +
    '<button class="lb-nav lb-prev" aria-label="Previous">‹</button>' +
    '<figure class="lb-stage"><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-nav lb-next" aria-label="Next">›</button>' +
    '<div class="lb-count"></div>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('figcaption');
  const lbCount = lb.querySelector('.lb-count');
  const lbPrev = lb.querySelector('.lb-prev');
  const lbNext = lb.querySelector('.lb-next');
  let lbList = [], lbIdx = 0;
  const lbOpen = () => !lb.classList.contains('hidden');
  function lbRender() {
    const im = lbList[lbIdx]; if (!im) return;
    lbImg.src = im.src; lbImg.alt = im.alt || '';
    lbCap.textContent = im.alt || ''; lbCap.style.display = im.alt ? '' : 'none';
    const multi = lbList.length > 1;
    lbCount.textContent = multi ? (lbIdx + 1) + ' / ' + lbList.length : '';
    lbPrev.style.visibility = multi ? '' : 'hidden';
    lbNext.style.visibility = multi ? '' : 'hidden';
  }
  function lbClose() { lb.classList.add('hidden'); lbImg.removeAttribute('src'); }
  function lbGo(d) { if (!lbList.length) return; lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbRender(); }
  deck.addEventListener('click', (e) => {
    const img = e.target.closest && e.target.closest('img');
    if (!img || img.classList.contains('logo-big')) return;
    const slide = img.closest('.slide.active'); if (!slide) return;
    const imgs = Array.from(slide.querySelectorAll('img')).filter(x => !x.classList.contains('logo-big'));
    if (!imgs.length) return;
    lbList = imgs; lbIdx = Math.max(0, imgs.indexOf(img));
    lb.classList.remove('hidden'); lbRender();
  });
  lbPrev.onclick = (e) => { e.stopPropagation(); lbGo(-1); };
  lbNext.onclick = (e) => { e.stopPropagation(); lbGo(1); };
  lb.querySelector('.lb-close').onclick = lbClose;
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbImg.parentNode) lbClose(); });
  document.addEventListener('keydown', (e) => {
    if (!lbOpen()) return;
    if (e.key === 'Escape') { e.stopImmediatePropagation(); e.preventDefault(); lbClose(); }
    else if (e.key === 'ArrowRight') { e.stopImmediatePropagation(); e.preventDefault(); lbGo(1); }
    else if (e.key === 'ArrowLeft') { e.stopImmediatePropagation(); e.preventDefault(); lbGo(-1); }
  }, true);

  // --- channel listener (keep the two windows in lock-step) ------------------
  if (bc) bc.onmessage = (e) => {
    const m = e.data || {};
    applyingRemote = true;
    if (m.type === 'goto') show(m.n);
    else if (m.type === 'lang') setLang(m.l);
    else if (m.type === 'black') setBlack(m.on);
    else if (m.type === 'hello') {            // a new window joined → tell it where we are
      bc.postMessage({ type: 'goto', n: idx });
      bc.postMessage({ type: 'lang', l: document.documentElement.dataset.lang });
    } else if (m.type === 'bye' && !isAudience) { endPresenter(); }
    applyingRemote = false;
  };

  // --- fullscreen helpers ----------------------------------------------------
  function presentFull() {
    const el = document.documentElement;
    if (document.fullscreenElement) { document.exitFullscreen(); return; }
    (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
    // taking fullscreen also gives this window keyboard focus → clicker works
    window.focus();
  }
  document.addEventListener('fullscreenchange', () => {
    document.body.classList.toggle('is-fullscreen', !!document.fullscreenElement);
  });

  // --- black / blank screen (clicker "B") ------------------------------------
  const blackEl = document.createElement('div');
  blackEl.className = 'black-screen hidden';
  document.body.appendChild(blackEl);
  blackEl.onclick = () => toggleBlack();
  function setBlack(on) {
    blackEl.classList.toggle('hidden', !on);
    if (bc && !applyingRemote) bc.postMessage({ type: 'black', on: on });
  }
  function toggleBlack() { setBlack(blackEl.classList.contains('hidden')); }

  // --- presenter console (2-window / PowerPoint-style) -----------------------
  let panel = null, timerEl = null, nowN = null, nowT = null, nextT = null, notesEl = null;
  let startMs = 0, timerInt = 0;

  let curFrame = null, nextFrame = null;
  function buildPanel() {
    panel = document.createElement('aside');
    panel.id = 'presenter-panel';
    panel.innerHTML =
      '<div class="pp-head"><span class="pp-tag">PRESENTER VIEW</span>' +
        '<span class="pp-meta"><b id="pp-now-n"></b> · <span id="pp-now-t"></span></span>' +
        '<span class="pp-timer" id="pp-timer">00:00</span></div>' +
      '<div class="pp-stage">' +
        '<div class="pp-pane pp-cur"><div class="pp-lbl">CURRENT</div><div class="pp-frame" id="pp-cur-frame"></div></div>' +
        '<div class="pp-aside">' +
          '<div class="pp-pane pp-nextpane"><div class="pp-lbl">NEXT <span id="pp-next-t"></span></div><div class="pp-frame" id="pp-next-frame"></div></div>' +
          '<div class="pp-notes" id="pp-notes"></div>' +
          '<div class="pp-ctrls">' +
            '<button id="pp-prev" class="pp-b">‹ Prev</button>' +
            '<button id="pp-next-btn" class="pp-b pp-b-main">Next ›</button>' +
            '<button id="pp-black" class="pp-b" title="Blank (B)">⬛</button>' +
            '<button id="pp-end" class="pp-b pp-b-end">✕ End</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(panel);
    timerEl = panel.querySelector('#pp-timer');
    nowN = panel.querySelector('#pp-now-n');
    nowT = panel.querySelector('#pp-now-t');
    nextT = panel.querySelector('#pp-next-t');
    notesEl = panel.querySelector('#pp-notes');
    curFrame = panel.querySelector('#pp-cur-frame');
    nextFrame = panel.querySelector('#pp-next-frame');
    panel.querySelector('#pp-prev').onclick = prev;
    panel.querySelector('#pp-next-btn').onclick = next;
    panel.querySelector('#pp-black').onclick = toggleBlack;
    panel.querySelector('#pp-end').onclick = endPresenter;
  }

  // Render a faithful, scaled-down live preview of a slide into a console frame (PowerPoint-style).
  // The clone keeps real viewport units (vw/vh) so clamp() sizing matches, then we scale it to fit.
  function renderThumb(frame, slideIndex) {
    if (!frame) return;
    frame.innerHTML = '';
    const el = slideEls[slideIndex];
    if (!el) { frame.classList.add('pp-empty'); frame.style.height = ''; return; }
    frame.classList.remove('pp-empty');
    const w = window.innerWidth, h = window.innerHeight;
    const fw = frame.clientWidth || 320;
    const scale = fw / w;
    const inner = document.createElement('div');
    inner.className = 'pp-thumb';
    inner.style.width = w + 'px';
    inner.style.height = h + 'px';
    inner.style.transform = 'scale(' + scale + ')';
    const clone = el.cloneNode(true);
    clone.classList.add('active');
    clone.style.position = 'relative';
    clone.style.opacity = '1';
    clone.style.transform = 'none';
    inner.appendChild(clone);
    frame.appendChild(inner);
    frame.style.height = (h * scale) + 'px';
  }

  function updatePresenter() {
    if (!panel) return;
    const cur = SLIDES[idx], nxt = SLIDES[idx + 1];
    nowN.textContent = String(idx + 1).padStart(2, '0') + ' / ' + total;
    nowT.textContent = cur ? cur.title.en : '';
    nextT.textContent = nxt ? (String(idx + 2).padStart(2, '0') + ' · ' + nxt.title.en) : '— end —';
    notesEl.textContent = cur && cur.notes ? cur.notes : '';
    notesEl.style.display = cur && cur.notes ? '' : 'none';
    renderThumb(curFrame, idx);
    renderThumb(nextFrame, idx + 1);
  }
  // keep the console previews crisp when the controller window is resized
  window.addEventListener('resize', () => { if (presenterOn) updatePresenter(); });

  // Open the projector window. If a screen is given, open straight onto it and auto-full-screen.
  // The window.open MUST run inside a live user gesture (presenter button OR chooser click),
  // never after an await — otherwise the browser blocks it as a popup.
  function openAudienceWindow(targetScreen) {
    const url = location.pathname + '?role=audience#' + (idx + 1);
    let feat = 'width=1280,height=760';
    if (targetScreen) {
      feat = 'left=' + targetScreen.availLeft + ',top=' + targetScreen.availTop +
             ',width=' + targetScreen.availWidth + ',height=' + targetScreen.availHeight;
    }
    audienceWin = window.open(url, 'owb-audience', feat);
    if (!audienceWin) { alert('Allow pop-ups for this site to open the projector window.'); return false; }
    if (targetScreen) {
      try { audienceWin.moveTo(targetScreen.availLeft, targetScreen.availTop); } catch (_) {}
      try { audienceWin.resizeTo(targetScreen.availWidth, targetScreen.availHeight); } catch (_) {}
      // ask the projector window to go full-screen; retry until its listener has booted
      const fs = () => { try { audienceWin.postMessage({ type: 'owb-autofs' }, location.origin); } catch (_) {} };
      fs(); setTimeout(fs, 500); setTimeout(fs, 1200); setTimeout(fs, 2500);
    }
    activatePresenterConsole();
    return true;
  }

  function activatePresenterConsole() {
    presenterOn = true;
    document.body.classList.add('role-console');
    if (!panel) buildPanel();
    panel.classList.remove('hidden');
    startMs = Date.now();
    clearInterval(timerInt);
    timerInt = setInterval(() => {
      const s = Math.floor((Date.now() - startMs) / 1000);
      timerEl.textContent = String((s / 60) | 0).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }, 500);
    updatePresenter();
    if (bc) bc.postMessage({ type: 'goto', n: idx });   // sync the new window once it boots (it also says hello)
  }

  // Monitor chooser — lets the presenter pick which physical screen is the projector.
  // Each screen button is a fresh user gesture, so window.open is allowed there.
  function showScreenChooser(screens, current) {
    const old = document.getElementById('screen-chooser');
    if (old) old.remove();
    const pick = document.createElement('div');
    pick.id = 'screen-chooser';
    let html = '<div class="sc-box"><div class="sc-h">Pick the projector screen</div>' +
               '<div class="sc-sub">Click the monitor the audience should see — it opens there full-screen.</div>' +
               '<div class="sc-grid">';
    screens.forEach((s, i) => {
      const isCur = s === current;
      const label = s.label || ('Screen ' + (i + 1));
      html += '<button class="sc-screen' + (isCur ? ' sc-cur' : '') + '" data-i="' + i + '">' +
              '<span class="sc-mon">🖥️</span><b>' + label + '</b>' +
              '<span class="sc-dim">' + s.width + '×' + s.height + (isCur ? ' · control screen' : '') + '</span>' +
              '</button>';
    });
    html += '</div><button class="sc-cancel">Cancel</button></div>';
    pick.innerHTML = html;
    document.body.appendChild(pick);
    pick.querySelectorAll('.sc-screen').forEach(btn => {
      btn.onclick = () => { const s = screens[+btn.dataset.i]; pick.remove(); openAudienceWindow(s); };
    });
    pick.querySelector('.sc-cancel').onclick = () => pick.remove();
    pick.addEventListener('click', (e) => { if (e.target === pick) pick.remove(); });
  }

  async function startPresenter() {
    if (presenterOn) { if (audienceWin && !audienceWin.closed) audienceWin.focus(); return; }
    // Single screen (or no Window Management API): open immediately within this click gesture.
    if (!(window.screen && window.screen.isExtended) || !window.getScreenDetails) {
      openAudienceWindow(null);
      return;
    }
    // Multi-monitor: query screens then show the chooser. getScreenDetails() awaits (and may
    // prompt for permission), consuming this gesture — so the real open happens on a chooser click.
    try {
      const sd = await window.getScreenDetails();
      showScreenChooser(sd.screens, sd.currentScreen);
    } catch (_) {
      openAudienceWindow(null);                            // permission denied → best-effort plain popup
    }
  }

  function endPresenter() {
    presenterOn = false;
    document.body.classList.remove('role-console');
    if (panel) panel.classList.add('hidden');
    clearInterval(timerInt);
    if (bc) bc.postMessage({ type: 'bye' });
    if (audienceWin && !audienceWin.closed) audienceWin.close();
    audienceWin = null;
  }

  // toolbar buttons (present / presenter view)
  const presentBtn = document.getElementById('present-btn');
  const presenterBtn = document.getElementById('presenter-btn');
  if (presentBtn) presentBtn.onclick = presentFull;
  if (presenterBtn) presenterBtn.onclick = startPresenter;

  // --- audience window setup -------------------------------------------------
  if (isAudience) {
    document.body.classList.add('role-audience');
    // tell the console where it currently is, and grab current state
    if (bc) bc.postMessage({ type: 'hello' });
    // one click anywhere on the projector screen → real fullscreen (browser needs the gesture)
    const fsHint = document.createElement('div');
    fsHint.id = 'fs-hint';
    fsHint.innerHTML = '<div class="fsh-box">⛶<br><b>Click to go full-screen</b>' +
      '<span>on this (projector) screen</span></div>';
    document.body.appendChild(fsHint);
    fsHint.onclick = () => { presentFull(); fsHint.remove(); };
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement && fsHint.parentNode) fsHint.remove();
    });
    // best-effort auto full-screen once the console has placed us on the projector screen.
    // Browsers usually require a gesture, so this may reject → the click hint stays as fallback.
    window.addEventListener('message', async (e) => {
      if (e.origin !== location.origin || !e.data || e.data.type !== 'owb-autofs') return;
      try {
        const el = document.documentElement;
        let opts;
        if (window.getScreenDetails) {
          const sd = await window.getScreenDetails();
          const ext = sd.screens.find(s => s !== sd.currentScreen) || sd.currentScreen;
          if (ext) opts = { screen: ext };
        }
        await (el.requestFullscreen ? el.requestFullscreen(opts) : Promise.reject());
        if (fsHint.parentNode) fsHint.remove();
      } catch (_) { /* needs a click → hint remains */ }
    });
  }

  // --- boot ------------------------------------------------------------------
  const start = parseInt((location.hash || '#1').slice(1), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
