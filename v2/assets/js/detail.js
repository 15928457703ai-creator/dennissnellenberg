/* Fengmei · 案例详情弹窗 */
(function () {
  var DATA = [{"slug":"oppo-mini","i":1,"title":"OPPO 自助服务小程序","desc":"小程序整体体验升级与设计规范沉淀，重构服务入口与内容结构，月活 34.81W。","year":"2025","role":"主设 · 交互 / 视觉","loc":"China","tags":["OPPO 全球服务中心","Mini Program"],"award":"","cover":"assets/ours/oppo-mini/card.jpg","images":[{"src":"assets/ours/oppo-mini/p01.webp","w":1920,"h":1080,"n":"p01"},{"src":"assets/ours/oppo-mini/p02.webp","w":1920,"h":1080,"n":"p02"},{"src":"assets/ours/oppo-mini/p03.webp","w":1920,"h":1080,"n":"p03"},{"src":"assets/ours/oppo-mini/p04.webp","w":1920,"h":1080,"n":"p04"},{"src":"assets/ours/oppo-mini/p05.webp","w":1920,"h":1080,"n":"p05"},{"src":"assets/ours/oppo-mini/p06.webp","w":1920,"h":1080,"n":"p06"},{"src":"assets/ours/oppo-mini/p07.webp","w":1920,"h":1080,"n":"p07"},{"src":"assets/ours/oppo-mini/p08.webp","w":1920,"h":1080,"n":"p08"},{"src":"assets/ours/oppo-mini/p09.webp","w":1920,"h":1080,"n":"p09"},{"src":"assets/ours/oppo-mini/p10.webp","w":1920,"h":1200,"n":"p10"}]},{"slug":"oppo-self","i":2,"title":"OPPO 自助服务","desc":"自助服务体验优化：以用户研究定位体验断点，重排服务动线与信息层级。","year":"2023","role":"体验设计","loc":"China","tags":["OPPO 全球服务中心","UX / UI"],"award":"","cover":"assets/ours/oppo-self/card.jpg","images":[{"src":"assets/ours/oppo-self/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/oppo-self/extra1.webp","w":2000,"h":1219,"n":"extra1"},{"src":"assets/ours/oppo-self/extra2.webp","w":2000,"h":2003,"n":"extra2"}]},{"slug":"oppo","i":3,"title":"OPPO 售后服务","desc":"凤凰计划下的售后服务体验提升，从调研、旅程梳理到界面与组件规范。","year":"2024","role":"UX Research & UI","loc":"China","tags":["OPPO 服务中心 UED","Design System"],"award":"","cover":"assets/ours/oppo/card.jpg","images":[{"src":"assets/ours/oppo/card.jpg","w":1250,"h":720,"n":"card"},{"src":"assets/ours/oppo/extra1.jpg","w":1920,"h":1080,"n":"extra1"},{"src":"assets/ours/oppo/extra2.jpg","w":1920,"h":1080,"n":"extra2"},{"src":"assets/ours/oppo/extra3.jpg","w":1920,"h":1080,"n":"extra3"}]},{"slug":"erp","i":4,"title":"金沙白酒 ERP","desc":"华润金沙白酒移动端 ERP 1.0，从 0 到 1 打通「生产 → 采购 → 库存」的移动办公闭环，服务 60+ 工厂的仓管与操作员。","year":"2025","role":"主设 · 交互 / 视觉","loc":"China","tags":["金沙酒业 · 华润","ERP 1.0"],"award":"","cover":"assets/ours/erp/card.jpg","images":[{"src":"assets/ours/erp/p01.webp","w":1920,"h":1080,"n":"p01"},{"src":"assets/ours/erp/p02.webp","w":1920,"h":1080,"n":"p02"},{"src":"assets/ours/erp/p03.webp","w":1920,"h":1080,"n":"p03"},{"src":"assets/ours/erp/p04.webp","w":1920,"h":1080,"n":"p04"},{"src":"assets/ours/erp/p05.webp","w":1920,"h":1080,"n":"p05"},{"src":"assets/ours/erp/p06.webp","w":1920,"h":1080,"n":"p06"},{"src":"assets/ours/erp/p07.webp","w":1920,"h":1080,"n":"p07"},{"src":"assets/ours/erp/p08.webp","w":1920,"h":1080,"n":"p08"},{"src":"assets/ours/erp/p09.webp","w":1920,"h":1080,"n":"p09"},{"src":"assets/ours/erp/p10.webp","w":1920,"h":1080,"n":"p10"},{"src":"assets/ours/erp/p11.webp","w":1920,"h":1080,"n":"p11"}]},{"slug":"videotest","i":5,"title":"Naivideo","desc":"海外百万用户量的 AI 视频创作 App，打通「沉浸观看 → Agent 创作 → 资产复用 → 商业化」闭环。","year":"2024","role":"主设 · 用户体验","loc":"Spain","tags":["PicLumen","AI App"],"award":"","cover":"assets/ours/videotest/card.jpg","images":[{"src":"assets/ours/videotest/p01.webp","w":1920,"h":1080,"n":"p01"},{"src":"assets/ours/videotest/p02.webp","w":1920,"h":1080,"n":"p02"},{"src":"assets/ours/videotest/p03.webp","w":1920,"h":1080,"n":"p03"},{"src":"assets/ours/videotest/p04.webp","w":1920,"h":1080,"n":"p04"},{"src":"assets/ours/videotest/p05.webp","w":1920,"h":1080,"n":"p05"},{"src":"assets/ours/videotest/p06.webp","w":1920,"h":1080,"n":"p06"},{"src":"assets/ours/videotest/p07.webp","w":1920,"h":1080,"n":"p07"},{"src":"assets/ours/videotest/p08.webp","w":1920,"h":1080,"n":"p08"}]},{"slug":"fabric","i":6,"title":"FABRIC™","desc":"品牌官网的设计与前端实现，克制的排版与细腻的滚动节奏。","year":"2023","role":"Design & Development","loc":"United Kingdom","tags":["Branding: Ché Heijnen","Website"],"award":"","cover":"assets/ours/fabric/card.jpg","images":[{"src":"assets/ours/fabric/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"aanstekelijk","i":7,"title":"Aanstekelijk","desc":"创意机构站点的版式与动效设计，强调文字节奏与图像切换。","year":"2023","role":"Design & Development","loc":"Netherlands","tags":["Branding: Ché Heijnen","Website"],"award":"","cover":"assets/ours/aanstekelijk/card.jpg","images":[{"src":"assets/ours/aanstekelijk/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"base-create","i":8,"title":"Base Create","desc":"设计与开发一体的品牌站，模块化区块与轻量动效。","year":"2023","role":"Design & Development","loc":"Hong Kong","tags":["Hong Kong","Website"],"award":"","cover":"assets/ours/base-create/card.jpg","images":[{"src":"assets/ours/base-create/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"avvr","i":9,"title":"AVVR","desc":"以建筑影像为主体的作品站，全屏图像与极简导航。","year":"2023","role":"Design & Development","loc":"Netherlands","tags":["Branding: Ché Heijnen","Website"],"award":"","cover":"assets/ours/avvr/card.jpg","images":[{"src":"assets/ours/avvr/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"graphichunters","i":10,"title":"GraphicHunters","desc":"平面设计作品集站点，网格系统与悬停预览的细节处理。","year":"2022","role":"Design & Development","loc":"Netherlands","tags":["Netherlands","Website"],"award":"","cover":"assets/ours/graphichunters/card.jpg","images":[{"src":"assets/ours/graphichunters/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"future-goals","i":11,"title":"Future Goals","desc":"概念项目，交互与前端实现，探索滚动叙事的节奏。","year":"2022","role":"Interaction & Development","loc":"Curaçao","tags":["Concept: One:Nil","Website"],"award":"","cover":"assets/ours/future-goals/card.jpg","images":[{"src":"assets/ours/future-goals/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"atypikal","i":12,"title":"Atypikal","desc":"交互与开发，围绕字体与图像的混合排版实验。","year":"2021","role":"Interaction & Development","loc":"United States","tags":["Design: Robyn Cambruzzi","Website"],"award":"","cover":"assets/ours/atypikal/card.jpg","images":[{"src":"assets/ours/atypikal/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"one-nil","i":13,"title":"One:Nil","desc":"工作室官网的交互实现，克制的黑白系统与细节动效。","year":"2021","role":"Interaction & Development","loc":"Netherlands","tags":["Design: GraphicHunters","Website"],"award":"","cover":"assets/ours/one-nil/card.jpg","images":[{"src":"assets/ours/one-nil/card.jpg","w":1250,"h":720,"n":"card"}]},{"slug":"andy-hardy","i":14,"title":"Andy Hardy","desc":"摄影师作品站，全屏影像与极简信息层。","year":"2020","role":"Design & Development","loc":"Australia","tags":["Australia","Website"],"award":"","cover":"assets/ours/andy-hardy/card.jpg","images":[{"src":"assets/ours/andy-hardy/card.jpg","w":1250,"h":720,"n":"card"}]}];
  var MAP = {};
  DATA.forEach(function (p) { MAP[p.slug] = p; });

  var script = document.currentScript || (function () {
    var all = document.getElementsByTagName('script');
    for (var i = all.length - 1; i >= 0; i--) if (/detail\.js/.test(all[i].src)) return all[i];
    return null;
  })();
  var ROOT = script ? script.src.replace(/assets\/js\/detail\.js.*$/, '') : './';

  var el = null, media, view, trk, ringBar, lastFocus = null, rafId = 0, playing = false, pushed = false;

  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* 药丸：黑盘从指针位置长满 + 文字反白 + 指针处 RGB 通道错位（参考站 u_pillDisc / u_pillA / PILL_SPLIT） */
  function pillHTML(cls) {
    return '<span class="' + cls + ' fm-pill">' +
      '<span class="fm-pill__fill" aria-hidden="true"></span>' +
      '<span class="fm-pill__t"></span>' +
      '<span class="fm-pill__inv" aria-hidden="true"><span class="fm-pill__t"></span></span>' +
      '<span class="fm-pill__lens" aria-hidden="true"><span class="fm-pill__t"></span></span>' +
    '</span>';
  }

  function setPill(node, text) {
    if (!node) return;
    var all = node.querySelectorAll('.fm-pill__t');
    for (var i = 0; i < all.length; i++) all[i].textContent = text;
    node.setAttribute('aria-label', text);
  }

  /* 指针进入点 → --px/--py，最远角 → --reach：圆盘就从这个点铺满整个药丸 */
  function aim(node, clientX, clientY) {
    var r = node.getBoundingClientRect();
    var px = Math.max(0, Math.min(r.width, clientX - r.left));
    var py = Math.max(0, Math.min(r.height, clientY - r.top));
    var reach = Math.ceil(Math.max(
      Math.sqrt(px * px + py * py),
      Math.sqrt((r.width - px) * (r.width - px) + py * py),
      Math.sqrt(px * px + (r.height - py) * (r.height - py)),
      Math.sqrt((r.width - px) * (r.width - px) + (r.height - py) * (r.height - py))
    )) + 2;
    node.style.setProperty('--px', px + 'px');
    node.style.setProperty('--py', py + 'px');
    node.style.setProperty('--reach', reach + 'px');
  }

  function bindHovers(root) {
    var nodes = root.querySelectorAll('.fm-pill, .fm-round');
    for (var i = 0; i < nodes.length; i++) {
      (function (n) {
        var queued = 0;
        n.addEventListener('pointerenter', function (e) {
          if (e.pointerType === 'touch') return;
          aim(n, e.clientX, e.clientY);
        });
        /* 圆盘圆心跟着指针走（参考站 ptr 是逐帧写入 uniform 的） */
        n.addEventListener('pointermove', function (e) {
          if (e.pointerType === 'touch' || queued) return;
          queued = 1;
          requestAnimationFrame(function () {
            queued = 0;
            aim(n, e.clientX, e.clientY);
          });
        });
        n.addEventListener('focus', function () {
          var r = n.getBoundingClientRect();
          aim(n, r.left + r.width / 2, r.top + r.height / 2);
        });
      })(nodes[i]);
    }
  }

  function edgeHTML(dir) {
    var prev = dir === 'prev';
    return '<button class="fm-detail__edge fm-detail__edge--' + dir + '" type="button" aria-label="' +
      (prev ? '上一个案例' : '下一个案例') + '">' +
      '<img class="fm-detail__edge-img" alt="" loading="lazy" decoding="async">' +
      '<svg class="fm-detail__edge-arrow" viewBox="0 0 16 10" aria-hidden="true"><path d="' +
        (prev ? 'M15 1 9 5l6 4' : 'M1 1l6 4-6 4') +
        '" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span class="fm-detail__edge-meta">' +
        '<span class="fm-detail__edge-k"></span>' +
        '<span class="fm-detail__edge-t"></span>' +
        '<span class="fm-detail__edge-sub"><span class="fm-detail__edge-idx"></span><span class="fm-detail__edge-y"></span></span>' +
      '</span>' +
    '</button>';
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
            '<button class="fm-detail__play fm-round" type="button" aria-label="自动浏览图片">' +
              '<span class="fm-round__hole" aria-hidden="true"></span>' +
              '<span class="fm-round__ring" aria-hidden="true"></span>' +
              '<svg class="i-play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 1.7 10 6l-6.6 4.3z" fill="currentColor"/></svg>' +
              '<svg class="i-pause" viewBox="0 0 12 12" aria-hidden="true"><rect x="2.6" y="1.8" width="2.4" height="8.4" fill="currentColor"/><rect x="7" y="1.8" width="2.4" height="8.4" fill="currentColor"/></svg>' +
            '</button>' +
            pillHTML('fm-detail__pill fm-detail__year') +
            pillHTML('fm-detail__pill fm-detail__pill--ghost fm-detail__role') +
            '<span class="fm-detail__award"></span>' +
          '</div>' +
          '<div class="fm-detail__foot">' +
            '<svg class="fm-detail__ring" viewBox="0 0 22 22" aria-hidden="true"><circle class="track" cx="11" cy="11" r="9"/><circle class="bar" cx="11" cy="11" r="9"/></svg>' +
            '<button class="fm-detail__next" type="button">下一个案例 <i>&#8594;</i></button>' +
          '</div>' +
        '</div>' +
        '<div class="fm-detail__media" tabindex="-1"><div class="fm-media__view"><div class="fm-media__track"></div></div></div>' +
        '<div class="fm-detail__gutter">' +
          '<button class="fm-detail__close fm-round" type="button" aria-label="关闭">' +
            '<span class="fm-round__hole" aria-hidden="true"></span>' +
            '<span class="fm-round__ring" aria-hidden="true"></span>' +
            '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.6 1.6l12.8 12.8M14.4 1.6L1.6 14.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="fm-detail__wipe" aria-hidden="true"></div>' +
      '</div>' +
      edgeHTML('prev') +
      edgeHTML('next');
    document.body.appendChild(wrap);
    el = wrap;
    media = wrap.querySelector('.fm-detail__media');
    view = wrap.querySelector('.fm-media__view');
    trk = wrap.querySelector('.fm-media__track');
    ringBar = wrap.querySelector('.fm-detail__ring .bar');

    wrap.querySelector('.fm-detail__close').addEventListener('click', close);
    wrap.querySelector('.fm-detail__scrim').addEventListener('click', close);
    wrap.querySelector('.fm-detail__next').addEventListener('click', function () { step(1); });
    wrap.querySelector('.fm-detail__play').addEventListener('click', togglePlay);
    bindEdges(wrap);
    bindDrag();
    bindWheel();
    bindLens();
    bindHovers(wrap);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
  }

  var EDGES = [['prev', -1], ['next', 1]];

  function bindEdges(wrap) {
    EDGES.forEach(function (pair) {
      var b = wrap.querySelector('.fm-detail__edge--' + pair[0]);
      if (!b) return;
      b.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        step(pair[1]);
      });
    });
  }

  /* ── 图片列：无限循环滚动 ──
     参考站 measure({inner, outer}) 的做法：图片按索引算虚拟位置，做 modulo 回绕，
     滚出上边的那张直接出现在最下面，所以永远滚不到底；速度走惯性衰减。 */
  var loop = { y: 0, v: 0, total: 0, cum: [], h: [], items: [], gap: 44, raf: 0 };
  var drag = { on: false, y: 0, start: 0, v: 0, t: 0, id: null };

  function track() { return el && el.querySelector('.fm-media__track'); }

  function measureLoop() {
    var tr = track();
    if (!tr) return;
    var items = [].slice.call(tr.children);
    loop.items = items;
    if (!items.length) { loop.total = 0; return; }
    loop.gap = parseFloat(getComputedStyle(media).getPropertyValue('--fm-gap')) || 44;
    var hs = [], cum = [], acc = 0, i;
    for (i = 0; i < items.length; i++) { hs.push(items[i].offsetHeight); cum.push(acc); acc += hs[i] + loop.gap; }
    loop.h = hs; loop.cum = cum; loop.total = acc;
  }

  function renderLoop() {
    if (!loop.items.length || !loop.total) return;
    var total = loop.total, H = view.clientHeight + 240;
    var y = loop.y % total; if (y < 0) y += total;
    for (var i = 0; i < loop.items.length; i++) {
      var py = (loop.cum[i] - y) % total; if (py < 0) py += total;
      var n = loop.items[i];
      n.style.transform = 'translate3d(0,' + py.toFixed(2) + 'px,0)';
      /* 可视带外直接隐藏，图多时不浪费合成 */
      n.style.visibility = py < H ? '' : 'hidden';
    }
    if (ringBar) {
      var r = Math.min(1, Math.max(0, y / total));
      ringBar.style.strokeDashoffset = String(56.5 * (1 - r));
    }
  }

  function loopFrame() {
    loop.raf = 0;
    if (!el || !el.classList.contains('is-open')) return;
    var moving = false;
    if (!drag.on && loop.v) {
      loop.y += loop.v; loop.v *= 0.93;
      if (Math.abs(loop.v) < 0.05) loop.v = 0;
      moving = true;
    }
    if (playing) { loop.y += 1.0; moving = true; }
    if (moving) renderLoop();
    loop.raf = requestAnimationFrame(loopFrame);
  }
  function kick() { if (!loop.raf) loop.raf = requestAnimationFrame(loopFrame); }

  function bindWheel() {
    media.addEventListener('wheel', function (e) {
      if (!loop.total) return;
      e.preventDefault();
      var d = e.deltaY;
      if (e.deltaMode === 1) d *= 18; else if (e.deltaMode === 2) d *= view.clientHeight;
      loop.y += d;
      loop.v = d * 0.06;
      if (Math.abs(d) > 1.5) stopPlay();
      renderLoop();
      kick();
    }, { passive: false });
  }

  /* 抓住图片列上下拖 —— 原站整页 grab 光标，拖起来是同一套回绕 */
  function bindDrag() {
    media.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || !loop.total) return;
      if (e.target.closest('a, button')) return;
      drag.on = true; drag.y = e.clientY; drag.start = loop.y;
      drag.v = 0; drag.t = performance.now(); drag.id = e.pointerId;
      stopPlay();
      el.classList.add('is-dragging');
      try { media.setPointerCapture(e.pointerId); } catch (err) {}
      kick();
    });
    media.addEventListener('pointermove', function (e) {
      if (!drag.on) return;
      e.preventDefault();
      var now = performance.now(), prev = loop.y;
      loop.y = drag.start - (e.clientY - drag.y);
      var dt = now - drag.t;
      if (dt > 0) drag.v = (loop.y - prev) / dt * 16;
      drag.t = now;
      renderLoop();
    });
    var end = function (e) {
      if (!drag.on) return;
      drag.on = false;
      el.classList.remove('is-dragging');
      try { media.releasePointerCapture(drag.id == null ? e.pointerId : drag.id); } catch (err) {}
      loop.v = Math.max(-70, Math.min(70, drag.v));
      drag.id = null;
      kick();
    };
    media.addEventListener('pointerup', end);
    media.addEventListener('pointercancel', end);
    media.addEventListener('lostpointercapture', end);
    media.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  /* ── 指针球 ──
     参考站那颗球不画自己，只是「在纸下面滚」：指针一动，整幅图顺着被推一点，
     越靠近指针推得越多，停下就慢慢摊平。所以不能做成「小圆放大镜」——
     那会露出一圈硬边，一眼就看穿是贴上去的。
     做法：整幅软位移。每帧生成一张很低分辨率的位移图（R/G 通道 = x/y 位移），
     衰减半径接近整块画面，喂给 feDisplacementMap，边界自己就没了。 */
  var warp = { svg: null, filt: null, fimg: null, map: null, ctx: null, img: null,
               q: 0, n: 0, timer: 0, on: false, armed: false, cx: 0, cy: 0, vx: 0, vy: 0, w: 0, h: 0, k: 3 };

  function ensureWarp() {
    if (warp.svg) return;
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'fm-lens');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML =
      '<filter id="fmWarp" filterUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" color-interpolation-filters="sRGB">' +
        '<feFlood flood-color="#808080" flood-opacity="1" result="flat"/>' +
        '<feImage result="m" x="0" y="0" width="10" height="10" preserveAspectRatio="none"/>' +
        '<feComposite in="m" in2="flat" operator="over" result="mm"/>' +
        '<feDisplacementMap in="SourceGraphic" in2="mm" scale="100" xChannelSelector="R" yChannelSelector="G"/>' +
      '</filter>';
    document.body.appendChild(svg);
    warp.svg = svg;
    warp.filt = svg.querySelector('filter');
    warp.fimg = svg.querySelector('feImage');
    warp.map = document.createElement('canvas');
    warp.ctx = warp.map.getContext('2d');
  }

  function warpSize() {
    if (!view) return false;
    var r = view.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    if (Math.abs(r.width - warp.w) < 1 && Math.abs(r.height - warp.h) < 1) return true;
    warp.w = Math.round(r.width);
    warp.h = Math.round(r.height);
    warp.k = Math.max(2, Math.ceil(Math.max(warp.w, warp.h) / 160));
    warp.map.width = Math.ceil(warp.w / warp.k);
    warp.map.height = Math.ceil(warp.h / warp.k);
    warp.img = null;
    warp.filt.setAttribute('width', warp.w);
    warp.filt.setAttribute('height', warp.h);
    warp.fimg.setAttribute('width', warp.w);
    warp.fimg.setAttribute('height', warp.h);
    return true;
  }

  /* 位移图：f 是径向衰减（中心 1 → 半径 1 处 0），
     ox/oy 里一份是「顺着指针拖」（-vx），一份是「指针处微微凸起」（dx * M）。 */
  function warpURL(cx, cy, amp) {
    var w = warp.w, h = warp.h, k = warp.k;
    var cv = warp.map, ctx = warp.ctx, cw = cv.width, ch = cv.height;
    if (!warp.img || warp.img.width !== cw) warp.img = ctx.createImageData(cw, ch);
    var d = warp.img.data;
    var R = Math.max(w, h) * 0.78;
    var vx = warp.vx * amp, vy = warp.vy * amp, M = 0.09;
    var i = 0, half = k * 0.5, x, y;
    for (y = 0; y < ch; y++) {
      var py = y * k + half, dy = py - cy, dys = dy * dy;
      for (x = 0; x < cw; x++) {
        var px = x * k + half, dx = px - cx;
        var r = Math.sqrt(dx * dx + dys) / R;
        var f = r < 1 ? 1 - r : 0;
        f = f * f * (3 - 2 * f);
        var ox = (dx * M - vx) * f, oy = (dy * M - vy) * f;
        if (ox > 24) ox = 24; else if (ox < -24) ox = -24;
        if (oy > 24) oy = 24; else if (oy < -24) oy = -24;
        d[i]     = 127.5 + 2.55 * ox;
        d[i + 1] = 127.5 + 2.55 * oy;
        d[i + 2] = 128; d[i + 3] = 255;
        i += 4;
      }
    }
    ctx.putImageData(warp.img, 0, 0);
    return cv.toDataURL('image/png');
  }

  function endWarp() {
    if (warp.q) { cancelAnimationFrame(warp.q); warp.q = 0; }
    if (warp.timer) { clearTimeout(warp.timer); warp.timer = 0; }
    warp.vx = 0; warp.vy = 0; warp.on = false;
    if (view) view.style.filter = '';
  }

  function stepWarp() {
    warp.q = 0;
    if (!warp.on) return;
    var mag = Math.sqrt(warp.vx * warp.vx + warp.vy * warp.vy);
    var amp = mag / 24; if (amp > 1) amp = 1;
    if (amp < 0.03) { endWarp(); return; }
    if (!warpSize()) { endWarp(); return; }
    if (!view.style.filter) view.style.filter = 'url(#fmWarp)';
    /* 位移图隔帧重画：滤镜本身就贵，30fps 已经够顺，别跟滚动抢帧 */
    warp.n = (warp.n + 1) % 2;
    if (!warp.n) warp.fimg.setAttribute('href', warpURL(warp.cx, warp.cy, amp));
    warp.vx *= 0.82; warp.vy *= 0.82;
    warp.q = requestAnimationFrame(stepWarp);
  }

  function bindLens() {
    media.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch' || drag.on) return;
      ensureWarp();
      var r = view.getBoundingClientRect();
      if (!r.width) return;
      var cx = e.clientX - r.left, cy = e.clientY - r.top;
      if (warp.armed) {
        warp.vx = warp.vx * 0.4 + (cx - warp.cx) * 0.6;
        warp.vy = warp.vy * 0.4 + (cy - warp.cy) * 0.6;
      } else {
        warp.vx = 0; warp.vy = 0;
      }
      warp.armed = true;
      warp.cx = cx; warp.cy = cy;
      if (!warp.on) {
        if (!warpSize()) return;
        warp.on = true;
      }
      if (!warp.q) warp.q = requestAnimationFrame(stepWarp);
      /* 指针停下就收：不靠 rAF 数帧，避免低帧率时残留滤镜 */
      if (warp.timer) clearTimeout(warp.timer);
      warp.timer = setTimeout(endWarp, 320);
    });
    media.addEventListener('pointerleave', function () { warp.armed = false; endWarp(); });
    media.addEventListener('pointerdown', function () { warp.armed = false; });
  }

  /* 关窗 / 换案例时收拾干净 */
  function clearLens() { warp.armed = false; endWarp(); }

  var cur = 0, curSlug = '', swapTimer = 0, ghostEl = null, flyTimer = null, ghostTimer = null;
  var lastOrigin = null, panelAnim = null;
  var FLY_OPEN = 680, FLY_SWAP = 560, FLY_CLOSE = 500;
  var EASE = 'cubic-bezier(.19, 1, .22, 1)';

  function isMobile() { return window.matchMedia('(max-width: 900px)').matches; }
  function still() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* 起点：被点的那张卡片 / 列表行 / 侧边预览卡的真实矩形 */
  function rectOf(node) {
    if (!node || !node.getBoundingClientRect) return null;
    var r = node.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) return null;
    if (r.right < 0 || r.left > window.innerWidth || r.bottom < 0 || r.top > window.innerHeight) return null;
    var rad = 12;
    try { rad = parseFloat(getComputedStyle(node).borderTopLeftRadius) || 12; } catch (e) {}
    return { x: r.left, y: r.top, w: r.width, h: r.height, r: Math.min(rad, r.height / 2) };
  }

  /* 深链进入：参考站没有起点卡片时，从画面中央一个小 sheet 长出来 */
  function defaultOrigin() {
    var W = window.innerWidth, H = window.innerHeight;
    if (isMobile()) return { x: 0, y: Math.round(H * 0.34), w: W, h: Math.round(H * 0.66), r: 20 };
    var w = Math.round(W * 0.46), h = Math.round(H * 0.46);
    return { x: Math.round((W - w) / 2), y: Math.round((H - h) / 2), w: w, h: h, r: 14 };
  }

  /* 方向切换：从要去的那个方向的一条窄边展开 */
  function sideOrigin(dir) {
    var W = window.innerWidth, H = window.innerHeight;
    var pad = isMobile() ? 0 : 24;
    var w = isMobile() ? Math.round(W * 0.16) : 44;
    return { x: dir > 0 ? W - pad - w : pad, y: pad, w: w, h: H - pad * 2, r: isMobile() ? 14 : 11 };
  }

  function panelRect() {
    var W = window.innerWidth, H = window.innerHeight;
    if (isMobile()) return { x: 0, y: 0, w: W, h: H, r: 0 };
    return { x: 24, y: 24, w: W - 48, h: H - 48, r: 16 };
  }

  function clearGhost() {
    clearTimeout(ghostTimer);
    if (ghostEl && ghostEl.parentNode) ghostEl.parentNode.removeChild(ghostEl);
    ghostEl = null;
  }

  /* 白色 sheet 从起点飞向面板矩形 —— 参考站里“卡片变成详情页”的那段 flight */
  function fly(from, cover, dur) {
    clearGhost();
    clearTimeout(flyTimer);
    if (!el) return;

    el.classList.add('is-flying');
    el.classList.remove('is-content');

    var to = panelRect();
    var instant = still();

    var g = h('div', 'fm-ghost');
    g.innerHTML = '<img class="fm-ghost__img" alt="" decoding="async"><span class="fm-ghost__wash"></span>';
    g.style.left = from.x + 'px';
    g.style.top = from.y + 'px';
    g.style.width = from.w + 'px';
    g.style.height = from.h + 'px';
    g.style.borderRadius = from.r + 'px';
    if (cover) g.querySelector('.fm-ghost__img').src = cover;
    document.body.appendChild(g);
    ghostEl = g;

    var sx = to.w / from.w, sy = to.h / from.h;
    var dx = to.x - from.x, dy = to.y - from.y;
    var rTo = Math.max(0, Math.round(to.r / Math.max(sx, sy)));

    if (!instant && g.animate) {
      /* 只用 transform（合成层）—— 参考站也是一块 plane 在 3D 里飞，不触发重排 */
      g.animate([
        { transform: 'translate3d(0, 0, 0) scale(1, 1)', borderRadius: from.r + 'px' },
        { transform: 'translate3d(' + dx + 'px,' + dy + 'px, 0) scale(' + sx + ',' + sy + ')', borderRadius: rTo + 'px' }
      ], { duration: dur, easing: EASE, fill: 'both' });

      if (cover) {
        g.querySelector('.fm-ghost__img').animate([
          { transform: 'scale(1.05)', opacity: 1 },
          { transform: 'scale(1)', opacity: 1, offset: .72 },
          { transform: 'scale(1)', opacity: 0, offset: 1 }
        ], { duration: dur, easing: 'cubic-bezier(.2, .8, .3, 1)', fill: 'both' });

        /* 卡面一路保持可见，临落地时冲白 —— 和参考站 u_white 0→1 的做法一致 */
        g.querySelector('.fm-ghost__wash').animate([
          { opacity: 0 },
          { opacity: .22, offset: .38 },
          { opacity: .9, offset: .84 },
          { opacity: 1, offset: .97 },
          { opacity: 1 }
        ], { duration: dur, easing: 'linear', fill: 'both' });
      } else {
        g.querySelector('.fm-ghost__wash').style.opacity = '1';
        g.querySelector('.fm-ghost__img').style.display = 'none';
      }
    }

    var panelIn = instant ? 0 : Math.round(dur * 0.75);

    /* 面板本体在 sheet 还完全盖着的时候先淡入（同色同形，接缝看不见） */
    setTimeout(function () { if (el) el.classList.remove('is-flying'); }, panelIn);

    /* sheet 正好落地的那一帧撤掉它，同时内容开始逐项入场 —— 不会出现半透明白块 */
    flyTimer = setTimeout(function () {
      if (!el) return;
      clearGhost();
      el.classList.remove('is-flying');
      el.classList.add('is-content');
      revealMedia();
      kick();
    }, instant ? 0 : dur);

    ghostTimer = setTimeout(clearGhost, instant ? 0 : dur + 60);
  }

  function revealMedia() {
    if (!media) return;
    var figs = media.querySelectorAll('.fm-media__item');
    for (var i = 0; i < figs.length; i++) {
      (function (fig, idx) {
        setTimeout(function () { fig.classList.add('is-in'); }, 20 + idx * 55);
      })(figs[i], i);
    }
    var sheet = media.querySelector('.fm-detail__sheet');
    if (sheet) setTimeout(function () { sheet.classList.add('is-in'); }, 130);
  }

  function paint(p) {
    cur = p.i - 1;
    curSlug = p.slug;

    el.querySelector('.fm-detail__title').textContent = p.title;
    el.querySelector('.fm-detail__desc').textContent = p.desc;
    setPill(el.querySelector('.fm-detail__year'), p.year);
    setPill(el.querySelector('.fm-detail__role'), p.role);
    var aw = el.querySelector('.fm-detail__award');
    aw.textContent = p.award ? '\uD83C\uDFC6' : '';
    aw.title = p.award || '';

    var tr = track();
    tr.innerHTML = '';
    loop.y = 0; loop.v = 0; loop.total = 0; loop.items = []; loop.cum = []; loop.h = [];
    clearLens();
    p.images.forEach(function (im, idx) {
      var fig = h('figure', 'fm-media__item');
      var img = document.createElement('img');
      img.src = ROOT + im.src;
      img.alt = p.title + ' — ' + (idx + 1);
      img.width = im.w; img.height = im.h;
      img.loading = idx === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.addEventListener('load', onImgLoad);
      fig.appendChild(img);
      tr.appendChild(fig);
    });

    if (p.images.length < 2) {
      var sheet = h('div', 'fm-detail__sheet');
      sheet.innerHTML =
        '<div class="fm-detail__sheet-row"><span>Year</span><b>' + p.year + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Location</span><b>' + p.loc + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Role</span><b>' + p.role + '</b></div>' +
        '<div class="fm-detail__sheet-row"><span>Tags</span><b>' + p.tags.join(' \u00b7 ') + '</b></div>' +
        '<a class="fm-detail__sheet-cta" href="mailto:345434367@qq.com">索要完整案例过程 <i>&#8599;</i></a>';
      sheet.className = 'fm-detail__sheet fm-media__item';
      tr.appendChild(sheet);
    }

    syncEdges();
    measureLoop();
    renderLoop();
  }

  var imgLoadT = 0;
  function onImgLoad() {
    clearTimeout(imgLoadT);
    imgLoadT = setTimeout(function () { measureLoop(); renderLoop(); }, 40);
  }

  function onResize() {
    measureLoop();
    renderLoop();
  }

  function open(slug, dir, originNode) {
    var p = MAP[slug];
    if (!p) return;
    if (!el) build();
    lastFocus = document.activeElement;

    var isOpen = el.classList.contains('is-open');
    var from = rectOf(originNode) || (isOpen ? sideOrigin(dir || 1) : defaultOrigin());
    lastOrigin = from;

    /* 已经打开 → 切换：内容先退场，换数据后白色 sheet 从侧边重新长满 */
    if (isOpen && curSlug && curSlug !== p.slug) {
      var d = dir || (p.i > (MAP[curSlug] ? MAP[curSlug].i : 1) ? 1 : -1);
      stopPlay();
      clearTimeout(swapTimer);
      el.dataset.dir = d > 0 ? 'next' : 'prev';
      setHash(p.slug);
      if (still()) { paint(p); el.classList.add('is-content'); revealMedia(); kick(); return; }
      wipeSwap(p, d);
      return;
    }

    paint(p);
    document.documentElement.classList.add('fm-detail-open');
    el.classList.add('is-mounted');
    void el.offsetWidth;
    if (panelAnim) { try { panelAnim.cancel(); } catch (e) {} panelAnim = null; }
    el.classList.remove('is-closing', 'is-out', 'is-content');
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    fly(from, ROOT + p.cover, FLY_OPEN);

    setTimeout(function () {
      var panel = el && el.querySelector('.fm-detail__panel');
      if (panel) panel.focus({ preventScroll: true });
    }, Math.round(FLY_OPEN * 0.72));

    setHash(p.slug);
  }

  function setHash(slug) {
    try {
      if (!pushed) { history.pushState({ fm: slug }, '', '#work=' + slug); pushed = true; }
      else { history.replaceState({ fm: slug }, '', '#work=' + slug); }
    } catch (e) {}
  }

  /* 左右两侧：露出相邻案例的卡片，悬停展开预览，点击切换 */
  function syncEdges() {
    EDGES.forEach(function (pair) {
      var btn = el && el.querySelector('.fm-detail__edge--' + pair[0]);
      if (!btn) return;
      var d = pair[1];
      var p = DATA[(cur + d + DATA.length) % DATA.length];
      if (!p) return;
      var src = p.cover ? ROOT + p.cover : (p.images[0] ? ROOT + p.images[0].src : '');
      var img = btn.querySelector('.fm-detail__edge-img');
      if (src && img.getAttribute('src') !== src) { img.src = src; img.alt = p.title; }
      btn.setAttribute('data-slug', p.slug);
      btn.setAttribute('aria-label', (d > 0 ? '下一个案例：' : '上一个案例：') + p.title);
      btn.querySelector('.fm-detail__edge-k').textContent = d > 0 ? '下一个案例' : '上一个案例';
      btn.querySelector('.fm-detail__edge-t').textContent = p.title;
      btn.querySelector('.fm-detail__edge-idx').textContent = (p.i < 10 ? '0' : '') + p.i + ' / ' + DATA.length;
      btn.querySelector('.fm-detail__edge-y').textContent = p.year;
    });
  }

  function close(fromPop) {
    if (!el || !el.classList.contains('is-open')) return;
    stopPlay();
    clearLens();
    loop.v = 0;
    el.classList.remove('is-wiping');
    clearTimeout(swapTimer);
    clearTimeout(flyTimer);
    clearGhost();

    /* 反向 flight：面板缩回它来时的那张卡片 */
    var panel = el.querySelector('.fm-detail__panel');
    var back = lastOrigin;
    if (panel && back && panel.animate && !still()) {
      var pr = panelRect();
      var sx = Math.max(.04, back.w / pr.w), sy = Math.max(.04, back.h / pr.h);
      var dx = back.x - pr.x, dy = back.y - pr.y;
      panelAnim = panel.animate([
        { transform: 'none', borderRadius: pr.r + 'px', opacity: 1 },
        { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + sx + ',' + sy + ')',
          borderRadius: (back.r || 12) + 'px', opacity: .25, offset: .92 },
        { transform: 'translate(' + (dx * 1.01) + 'px,' + (dy * 1.01) + 'px) scale(' + sx + ',' + sy + ')',
          borderRadius: (back.r || 12) + 'px', opacity: 0 }
      ], { duration: FLY_CLOSE, easing: 'cubic-bezier(.4, 0, .2, 1)', fill: 'both' });
    }

    el.classList.remove('is-content', 'is-flying');
    el.classList.remove('is-open');
    el.classList.add('is-closing');
    el.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('fm-detail-open');
    setTimeout(function () {
      if (!el.classList.contains('is-open')) el.classList.remove('is-mounted', 'is-closing');
    }, FLY_CLOSE + 40);
    if (!fromPop) {
      if (pushed) { pushed = false; try { history.back(); } catch (e) {} }
      else { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
    } else { pushed = false; }
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} }
  }

  /* ── 切换案例：一块「项目主色」的 sheet 从要去的那一侧铺满，换完内容再横推出去
     —— 参考站切项目时先冲一层色板（u_sheetP），落地后才露出新页面 */
  var colorCache = {};

  function accentOf(src, cb) {
    if (colorCache[src]) return cb(colorCache[src]);
    var img = new Image();
    img.onload = function () {
      var col = '#f1f1ee';
      try {
        var c = document.createElement('canvas'), g;
        c.width = c.height = 24;
        g = c.getContext('2d');
        g.drawImage(img, 0, 0, 24, 24);
        var d = g.getImageData(0, 0, 24, 24).data;
        var best = null, bestSat = 0, r = 0, gg = 0, b = 0, n = 0, i, R, G, B, mx, mn, sat;
        for (i = 0; i < d.length; i += 4) {
          R = d[i]; G = d[i + 1]; B = d[i + 2];
          mx = Math.max(R, G, B); mn = Math.min(R, G, B);
          sat = mx === 0 ? 0 : (mx - mn) / mx;
          r += R; gg += G; b += B; n++;
          if (sat > bestSat) { bestSat = sat; best = [R, G, B]; }
        }
        if (bestSat > .18) col = 'rgb(' + best.join(',') + ')';
        else {
          var lum = (r / n) * .299 + (gg / n) * .587 + (b / n) * .114;
          col = lum > 150 ? '#ececea' : '#141416';
        }
      } catch (e) {}
      colorCache[src] = col; cb(col);
    };
    img.onerror = function () { cb('#f1f1ee'); };
    img.src = src;
  }

  function wipeSwap(p, d) {
    var wipe = el.querySelector('.fm-detail__wipe');
    var panel = el.querySelector('.fm-detail__panel');
    if (!wipe || !panel || !wipe.animate) {
      paint(p); el.classList.add('is-content'); revealMedia(); kick(); return;
    }
    var W = panel.clientWidth, H = panel.clientHeight;
    var x = d > 0 ? W + 30 : -30, y = Math.round(H * 0.5);
    var reach = Math.ceil(Math.sqrt((W + 60) * (W + 60) + H * H));
    wipe.style.setProperty('--wx', x + 'px');
    wipe.style.setProperty('--wy', y + 'px');
    wipe.style.background = '#141416';
    el.classList.add('is-wiping');
    accentOf(ROOT + (p.cover || (p.images[0] && p.images[0].src) || ''), function (c) { wipe.style.background = c; });
    wipe.animate([
      { clipPath: 'circle(0px at ' + x + 'px ' + y + 'px)' },
      { clipPath: 'circle(' + reach + 'px at ' + x + 'px ' + y + 'px)' }
    ], { duration: 420, easing: 'cubic-bezier(.72, 0, .24, 1)', fill: 'both' });

    swapTimer = setTimeout(function () {
      if (!el) return;
      paint(p);
      el.classList.add('is-content');
      revealMedia();
      kick();
      var x2 = d > 0 ? -30 : W + 30;
      var a2 = wipe.animate([
        { clipPath: 'circle(' + reach + 'px at ' + x + 'px ' + y + 'px)' },
        { clipPath: 'circle(' + reach + 'px at ' + x2 + 'px ' + y + 'px)', offset: .4 },
        { clipPath: 'circle(0px at ' + x2 + 'px ' + y + 'px)' }
      ], { duration: 560, easing: 'cubic-bezier(.65, 0, .3, 1)', fill: 'both' });
      a2.onfinish = function () {
        el.classList.remove('is-wiping');
        try { a2.cancel(); } catch (e) {}
      };
    }, 400);
  }

  function step(d) {
    var i = (cur + d + DATA.length) % DATA.length;
    open(DATA[i].slug, d);
  }

  function togglePlay() {
    playing ? stopPlay() : startPlay();
  }

  function startPlay() {
    playing = true;
    el.classList.add('is-playing');
    kick();
  }

  function stopPlay() {
    playing = false;
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
    var origin = node.closest('[data-gl="card"], a[href*="projects/"], [data-slug], .item');
    open(slug, 0, origin || null);
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
