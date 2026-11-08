/* Fengmei · 案例详情弹窗 */
(function () {
  var DATA = [{"slug":"oppo-mini","i":1,"title":"OPPO 自助服务小程序","desc":"小程序整体体验升级与设计规范沉淀，重构服务入口与内容结构，月活 34.81W。","year":"2025","role":"主设 · 交互 / 视觉","loc":"China","tags":["OPPO 全球服务中心","Mini Program"],"award":"","images":[{"src":"assets/ours/oppo-mini/p01.webp","w":1920,"h":1080,"n":"p01"},{"src":"assets/ours/oppo-mini/p02.webp","w":1920,"h":1080,"n":"p02"},{"src":"assets/ours/oppo-mini/p03.webp","w":1920,"h":1080,"n":"p03"},{"src":"assets/ours/oppo-mini/p04.webp","w":1920,"h":1080,"n":"p04"},{"src":"assets/ours/oppo-mini/p05.webp","w":1920,"h":1080,"n":"p05"},{"src":"assets/ours/oppo-mini/p06.webp","w":1920,"h":1080,"n":"p06"},{"src":"assets/ours/oppo-mini/p07.webp","w":1920,"h":1080,"n":"p07"},{"src":"assets/ours/oppo-mini/p08.webp","w":1920,"h":1080,"n":"p08"},{"src":"assets/ours/oppo-mini/p09.webp","w":1920,"h":1080,"n":"p09"},{"src":"assets/ours/oppo-mini/p10.webp","w":1920,"h":1200,"n":"p10"}]},{"slug":"oppo-self","i":2,"title":"OPPO 自助服务","desc":"自助服务体验优化：以用户研究定位体验断点，重排服务动线与信息层级。","year":"2023","role":"体验设计","loc":"China","tags":["OPPO 全球服务中心","UX / UI"],"award":"","images":[{"src":"assets/ours/oppo-self/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/oppo-self/extra1.webp","w":2000,"h":1219,"n":"extra1"},{"src":"assets/ours/oppo-self/extra2.webp","w":2000,"h":2003,"n":"extra2"}]},{"slug":"oppo","i":3,"title":"OPPO 售后服务","desc":"凤凰计划下的售后服务体验提升，从调研、旅程梳理到界面与组件规范。","year":"2024","role":"UX Research & UI","loc":"China","tags":["OPPO 服务中心 UED","Design System"],"award":"","images":[{"src":"assets/ours/oppo/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/oppo/extra1.jpg","w":1920,"h":1080,"n":"extra1"},{"src":"assets/ours/oppo/extra2.jpg","w":1920,"h":1080,"n":"extra2"},{"src":"assets/ours/oppo/extra3.jpg","w":1920,"h":1080,"n":"extra3"}]},{"slug":"erp","i":4,"title":"金沙白酒 ERP","desc":"移动端 ERP 从 0 到 1 建设，覆盖 60+ 工厂场景的交互与视觉体系。","year":"2025","role":"交互与视觉主设","loc":"China","tags":["金沙酒业 · 华润","ERP"],"award":"","images":[{"src":"assets/ours/erp/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/erp/extra1.webp","w":1508,"h":1812,"n":"extra1"},{"src":"assets/ours/erp/extra2.webp","w":1600,"h":1557,"n":"extra2"},{"src":"assets/ours/erp/extra3.webp","w":1600,"h":638,"n":"extra3"}]},{"slug":"videotest","i":5,"title":"Naivideo","desc":"PicLumen 旗下海外 AI 视频与图像创作 App，为短剧创作者提供 AIGC 工作流。","year":"2024","role":"主设 · 用户体验","loc":"Spain","tags":["PicLumen","AI App"],"award":"","images":[{"src":"assets/ours/videotest/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/videotest/extra1.webp","w":460,"h":321,"n":"extra1"},{"src":"assets/ours/videotest/extra2.webp","w":304,"h":340,"n":"extra2"}]},{"slug":"fabric","i":6,"title":"FABRIC™","desc":"品牌官网的设计与前端实现，克制的排版与细腻的滚动节奏。","year":"2023","role":"Design & Development","loc":"United Kingdom","tags":["Branding: Ché Heijnen","Website"],"award":"","images":[{"src":"assets/ours/fabric/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"aanstekelijk","i":7,"title":"Aanstekelijk","desc":"创意机构站点的版式与动效设计，强调文字节奏与图像切换。","year":"2023","role":"Design & Development","loc":"Netherlands","tags":["Branding: Ché Heijnen","Website"],"award":"","images":[{"src":"assets/ours/aanstekelijk/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"base-create","i":8,"title":"Base Create","desc":"设计与开发一体的品牌站，模块化区块与轻量动效。","year":"2023","role":"Design & Development","loc":"Hong Kong","tags":["Hong Kong","Website"],"award":"","images":[{"src":"assets/ours/base-create/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"avvr","i":9,"title":"AVVR","desc":"以建筑影像为主体的作品站，全屏图像与极简导航。","year":"2023","role":"Design & Development","loc":"Netherlands","tags":["Branding: Ché Heijnen","Website"],"award":"","images":[{"src":"assets/ours/avvr/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"graphichunters","i":10,"title":"GraphicHunters","desc":"平面设计作品集站点，网格系统与悬停预览的细节处理。","year":"2022","role":"Design & Development","loc":"Netherlands","tags":["Netherlands","Website"],"award":"","images":[{"src":"assets/ours/graphichunters/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"future-goals","i":11,"title":"Future Goals","desc":"概念项目，交互与前端实现，探索滚动叙事的节奏。","year":"2022","role":"Interaction & Development","loc":"Curaçao","tags":["Concept: One:Nil","Website"],"award":"","images":[{"src":"assets/ours/future-goals/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"atypikal","i":12,"title":"Atypikal","desc":"交互与开发，围绕字体与图像的混合排版实验。","year":"2021","role":"Interaction & Development","loc":"United States","tags":["Design: Robyn Cambruzzi","Website"],"award":"","images":[{"src":"assets/ours/atypikal/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"one-nil","i":13,"title":"One:Nil","desc":"工作室官网的交互实现，克制的黑白系统与细节动效。","year":"2021","role":"Interaction & Development","loc":"Netherlands","tags":["Design: GraphicHunters","Website"],"award":"","images":[{"src":"assets/ours/one-nil/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"andy-hardy","i":14,"title":"Andy Hardy","desc":"摄影师作品站，全屏影像与极简信息层。","year":"2020","role":"Design & Development","loc":"Australia","tags":["Australia","Website"],"award":"","images":[{"src":"assets/ours/andy-hardy/card.jpg","w":1250,"h":720,"n":"card"}]}];
  var MAP = {};
  DATA.forEach(function (p) { MAP[p.slug] = p; });

  var script = document.currentScript || (function () {
    var all = document.getElementsByTagName('script');
    for (var i = all.length - 1; i >= 0; i--) if (/detail\.js/.test(all[i].src)) return all[i];
    return null;
  })();
  var ROOT = script ? script.src.replace(/assets\/js\/detail\.js.*$/, '') : './';

  var el = null, media, ringBar, lastFocus = null, rafId = 0, playing = false, pushed = false;

  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function build() {
    var wrap = h('div', 'fm-detail');
    wrap.innerHTML =
      '<div class="fm-detail__scrim"></div>' +
      '<div class="fm-detail__panel" role="dialog" aria-modal="true" aria-label="案例详情" tabindex="-1">' +
        '<div class="fm-detail__info">' +
          '<h2 class="fm-detail__title fm-detail__an"></h2>' +
          '<p class="fm-detail__desc fm-detail__an"></p>' +
          '<div class="fm-detail__meta fm-detail__an">' +
            '<button class="fm-detail__play" type="button" aria-label="自动浏览图片">' +
              '<svg class="i-play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 1.7 10 6l-6.6 4.3z" fill="currentColor"/></svg>' +
              '<svg class="i-pause" viewBox="0 0 12 12" aria-hidden="true"><rect x="2.6" y="1.8" width="2.4" height="8.4" fill="currentColor"/><rect x="7" y="1.8" width="2.4" height="8.4" fill="currentColor"/></svg>' +
            '</button>' +
            '<span class="fm-detail__pill fm-detail__year"></span>' +
            '<span class="fm-detail__pill fm-detail__pill--ghost fm-detail__role"></span>' +
            '<span class="fm-detail__award"></span>' +
          '</div>' +
          '<div class="fm-detail__foot">' +
            '<svg class="fm-detail__ring" viewBox="0 0 22 22" aria-hidden="true"><circle class="track" cx="11" cy="11" r="9"/><circle class="bar" cx="11" cy="11" r="9"/></svg>' +
            '<button class="fm-detail__next" type="button">下一个案例 <i>&#8594;</i></button>' +
          '</div>' +
        '</div>' +
        '<div class="fm-detail__media" tabindex="-1"></div>' +
        '<div class="fm-detail__gutter">' +
          '<button class="fm-detail__close" type="button" aria-label="关闭">' +
            '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.6 1.6l12.8 12.8M14.4 1.6L1.6 14.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    el = wrap;
    media = wrap.querySelector('.fm-detail__media');
    ringBar = wrap.querySelector('.fm-detail__ring .bar');

    wrap.querySelector('.fm-detail__close').addEventListener('click', close);
    wrap.querySelector('.fm-detail__scrim').addEventListener('click', close);
    wrap.querySelector('.fm-detail__next').addEventListener('click', function () { step(1); });
    wrap.querySelector('.fm-detail__play').addEventListener('click', togglePlay);
    media.addEventListener('scroll', onScroll, { passive: true });
    bindDrag();
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onScroll);
  }

  /* 抓住图片列上下拖：还原原站 cursor:grab / grabbing 的拖拽手感 */
  var drag = { on: false, y: 0, top: 0, v: 0, t: 0, id: null };

  function bindDrag() {
    media.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.pointerType === 'touch') return;
      if (e.target.closest('a, button')) return;
      drag.on = true; drag.y = e.clientY; drag.top = media.scrollTop;
      drag.v = 0; drag.t = performance.now(); drag.id = e.pointerId;
      stopPlay();
      el.classList.add('is-dragging');
      try { media.setPointerCapture(e.pointerId); } catch (err) {}
    });
    media.addEventListener('pointermove', function (e) {
      if (!drag.on) return;
      e.preventDefault();
      var now = performance.now();
      var prev = media.scrollTop;
      media.scrollTop = drag.top - (e.clientY - drag.y);
      var dt = now - drag.t;
      if (dt > 0) drag.v = (media.scrollTop - prev) / dt * 16;
      drag.t = now;
    });
    var end = function (e) {
      if (!drag.on) return;
      drag.on = false;
      el.classList.remove('is-dragging');
      try { media.releasePointerCapture(drag.id == null ? e.pointerId : drag.id); } catch (err) {}
      (function glide() {
        if (Math.abs(drag.v) < 0.4) return;
        var before = media.scrollTop;
        media.scrollTop += drag.v;
        if (media.scrollTop === before) { drag.v = 0; return; }
        drag.v *= 0.93;
        requestAnimationFrame(glide);
      })();
      drag.id = null;
    };
    media.addEventListener('pointerup', end);
    media.addEventListener('pointercancel', end);
    media.addEventListener('lostpointercapture', end);
    media.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  var cur = 0;

  function open(slug) {
    var p = MAP[slug];
    if (!p) return;
    if (!el) build();
    cur = p.i - 1;
    lastFocus = document.activeElement;

    el.querySelector('.fm-detail__title').textContent = p.title;
    el.querySelector('.fm-detail__desc').textContent = p.desc;
    el.querySelector('.fm-detail__year').textContent = p.year;
    el.querySelector('.fm-detail__role').textContent = p.role;
    var aw = el.querySelector('.fm-detail__award');
    aw.textContent = p.award ? '\uD83C\uDFC6' : '';
    aw.title = p.award || '';

    media.innerHTML = '';
    media.scrollTop = 0;
    p.images.forEach(function (im, idx) {
      var fig = h('figure');
      var img = document.createElement('img');
      img.src = ROOT + im.src;
      img.alt = p.title + ' — ' + (idx + 1);
      img.width = im.w; img.height = im.h;
      img.loading = idx === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      fig.appendChild(img);
      media.appendChild(fig);
      requestAnimationFrame(function () {
        setTimeout(function () { fig.classList.add('is-in'); }, 90 + idx * 70);
      });
    });

    if (p.images.length < 2) {
      var sheet = h('div', 'fm-detail__sheet');
      sheet.innerHTML =
        '<div class="fm-detail__sheet-row"><span>Year</span><b>' + p.year + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Location</span><b>' + p.loc + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Role</span><b>' + p.role + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Tags</span><b>' + p.tags.join(' \u00b7 ') + '</b></div>' +
        '<a class="fm-detail__sheet-cta" href="mailto:345434367@qq.com">索要完整案例过程 <i>&#8599;</i></a>';
      media.appendChild(sheet);
      requestAnimationFrame(function () {
        setTimeout(function () { sheet.classList.add('is-in'); }, 260);
      });
    }

    document.documentElement.classList.add('fm-detail-open');
    el.classList.add('is-mounted');
    void el.offsetWidth;
    el.classList.add('is-open');
    el.classList.remove('is-closing');
    el.setAttribute('aria-hidden', 'false');
    onScroll();
    setTimeout(function () {
      var panel = el && el.querySelector('.fm-detail__panel');
      if (panel) panel.focus({ preventScroll: true });
    }, 420);

    try {
      if (!pushed) { history.pushState({ fm: p.slug }, '', '#work=' + p.slug); pushed = true; }
      else { history.replaceState({ fm: p.slug }, '', '#work=' + p.slug); }
    } catch (e) {}
  }

  function close(fromPop) {
    if (!el || !el.classList.contains('is-open')) return;
    stopPlay();
    el.classList.remove('is-open');
    el.classList.add('is-closing');
    el.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('fm-detail-open');
    setTimeout(function () {
      if (!el.classList.contains('is-open')) el.classList.remove('is-mounted', 'is-closing');
    }, 320);
    if (!fromPop) {
      if (pushed) { pushed = false; try { history.back(); } catch (e) {} }
      else { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
    } else { pushed = false; }
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} }
  }

  function step(d) {
    var i = (cur + d + DATA.length) % DATA.length;
    open(DATA[i].slug);
  }

  function onScroll() {
    if (!media) return;
    var max = media.scrollHeight - media.clientHeight;
    var r = max > 6 ? media.scrollTop / max : 0;
    if (ringBar) ringBar.style.strokeDashoffset = String(56.5 * (1 - Math.min(1, Math.max(0, r))));
  }

  function togglePlay() {
    playing ? stopPlay() : startPlay();
  }

  function startPlay() {
    playing = true;
    el.classList.add('is-playing');
    var n = 0;
    (function tick() {
      if (!playing) return;
      media.scrollTop += 1.05;
      if (media.scrollTop + media.clientHeight >= media.scrollHeight - 2) {
        stopPlay();
        return;
      }
      rafId = requestAnimationFrame(tick);
    })();
  }

  function stopPlay() {
    playing = false;
    cancelAnimationFrame(rafId);
    if (el) el.classList.remove('is-playing');
  }

  function onKey(e) {
    if (!el || !el.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === ' ' && e.target === document.body) { e.preventDefault(); togglePlay(); }
  }

  /* 拦截卡片点击：不再跳转，改为弹窗 */
  function resolve(id) {
    if (!id) return null;
    if (MAP[id]) return id;
    for (var i = 0; i < DATA.length; i++) {
      if (id.indexOf(DATA[i].slug) > -1) return DATA[i].slug;
    }
    return null;
  }

  function slugFrom(node) {
    var card = node.closest('[data-gl="card"][data-id]');
    if (card) return resolve(card.dataset.id);
    var a = node.closest('a[href*="projects/"]');
    if (a) {
      var m = a.getAttribute('href').match(/projects\/([^\/]+)/);
      if (m && resolve(m[1])) return resolve(m[1]);
    }
    var li = node.closest('[data-slug]');
    if (li && MAP[li.dataset.slug]) return li.dataset.slug;
    return null;
  }

  document.addEventListener('click', function (e) {
    var node = e.target;
    if (!node || !node.closest) return;
    if (el && el.contains(node)) return;
    var slug = slugFrom(node);
    if (!slug) return;
    e.preventDefault();
    e.stopPropagation();
    open(slug);
  }, true);

  window.addEventListener('popstate', function () {
    if (el && el.classList.contains('is-open')) close(true);
  });

  function fromHash() {
    var m = location.hash.match(/work=([\w-]+)/);
    if (m && MAP[m[1]]) open(m[1]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fromHash);
  else fromHash();

  window.FM_DETAIL = { open: open, close: close, data: DATA };
})();
