/* ------------------------------------------------------------------
   Beyond the work — 3D photo globe
   Fibonacci-sphere layout + perspective projection + depth blur,
   drag to rotate with inertia, click a front card to enlarge.
   Effect reference: ramp.design
   ------------------------------------------------------------------ */
(function () {
   'use strict';

   var PHOTOS = [
      { src: 'assets/img/naivideo-live/demo-night-001.webp', w: 1600, h: 1060, label: 'Demo Night at South Park Commons' },
      { src: 'assets/img/naivideo-live/demo-night-005.webp', w: 1600, h: 1066, label: 'Amber presenting at Demo Night' },
      { src: 'assets/img/naivideo-live/dive-club-001.webp', w: 1600, h: 1067, label: 'Dive Club Live at Ramp HQ' },
      { src: 'assets/img/naivideo-live/dive-club-004.webp', w: 1600, h: 1067, label: 'Dive Club Live at Ramp HQ' },
      { src: 'assets/img/naivideo-live/dive-club-005.webp', w: 1600, h: 1067, label: 'Dive Club Live at Ramp HQ' },
      { src: 'assets/img/naivideo-live/dive-club-006.webp', w: 1600, h: 1067, label: 'Bradley sharing his custom game at Dive Club' },
      { src: 'assets/img/naivideo-live/brand-futures-001.webp', w: 1600, h: 1200, label: 'Paul Jun presenting at Brand Futures' },
      { src: 'assets/img/naivideo-live/IMG_8883.webp', w: 1200, h: 1600, label: 'Bao showing off his cat exploration at Brand Futures' },
      { src: 'assets/img/naivideo-live/cooper-hewitt-001.webp', w: 1060, h: 1600, label: 'Cooper Hewitt Museum field trip' },
      { src: 'assets/img/naivideo-live/cooper-hewitt-002.webp', w: 1600, h: 1060, label: 'Cooper Hewitt Museum field trip' },
      { src: 'assets/img/naivideo-live/cooper-hewitt-003.webp', w: 1600, h: 1060, label: 'Cooper Hewitt Museum field trip' },
      { src: 'assets/img/naivideo-live/cooper-hewitt-004.webp', w: 1060, h: 1600, label: 'Cooper Hewitt Museum field trip' },
      { src: 'assets/img/naivideo-live/cooper-hewitt-005.webp', w: 1600, h: 1060, label: 'Cooper Hewitt Museum field trip' },
      { src: 'assets/img/naivideo-live/config-002.webp', w: 1200, h: 1600, label: 'Config 2026 in San Francisco' },
      { src: 'assets/img/naivideo-live/random-006.webp', w: 1200, h: 1600, label: 'Supporting Zain at his race' },
      { src: 'assets/img/naivideo-live/kelli-1.webp', w: 1600, h: 1200, label: 'A workshop with Kelli Anderson on paper magic' },
      { src: 'assets/img/naivideo-live/kelli-2.webp', w: 1600, h: 1200, label: 'A workshop with Kelli Anderson on paper magic' }
   ];

   var AUTO_SPEED = (2 * Math.PI) / 56000; // rad per ms — same cadence as the original
   var MAX_BLUR = 4.5;
   var PITCH_LIMIT = 0.42;

   function clamp(v, min, max) {
      return Math.min(Math.max(v, min), max);
   }

   function smoothstep(t) {
      t = clamp(t, 0, 1);
      return t * t * (3 - 2 * t);
   }

   var lb = null;

   function openLightbox(src, label) {
      if (!lb) {
         lb = document.createElement('div');
         lb.className = 'beyond-lightbox';
         lb.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>';
         document.body.appendChild(lb);
         lb.addEventListener('click', function () {
            lb.classList.remove('is-open');
         });
         document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') lb.classList.remove('is-open');
         });
      }
      var img = lb.querySelector('img');
      img.src = src;
      img.alt = label;
      lb.querySelector('figcaption').textContent = label;
      lb.classList.add('is-open');
   }

   function initSphere() {
      var stage = document.getElementById('beyondStage');
      var sphere = document.getElementById('beyondSphere');
      if (!stage || !sphere || sphere.getAttribute('data-ready') === '1') return null;
      sphere.setAttribute('data-ready', '1');

      var frag = document.createDocumentFragment();
      var cards = [];

      PHOTOS.forEach(function (p) {
         var btn = document.createElement('button');
         btn.type = 'button';
         btn.className = 'beyond__photo';
         btn.style.aspectRatio = p.w + ' / ' + p.h;
         btn.setAttribute('aria-label', p.label);

         var card = document.createElement('span');
         card.className = 'beyond__card';

         var img = document.createElement('img');
         img.src = p.src;
         img.alt = p.label;
         img.draggable = false;
         img.decoding = 'async';

         card.appendChild(img);
         btn.appendChild(card);
         frag.appendChild(btn);

         btn.addEventListener('click', function () {
            if (moved > 8) return;
            openLightbox(p.src, p.label);
         });

         cards.push(btn);
      });

      sphere.appendChild(frag);

      var N = PHOTOS.length;
      var golden = Math.PI * (3 - Math.sqrt(5));
      var pts = [];
      var active = [];
      var activeCount = -1;

      // narrow screens show a lighter subset, like the original does
      function setActive(count) {
         if (count === activeCount) return;
         activeCount = count;
         active = [];

         if (count >= N) {
            for (var i = 0; i < N; i++) active.push(i);
         } else {
            var seen = {};
            for (var k = 0; k < count; k++) {
               var idx = Math.round((k * (N - 1)) / (count - 1));
               if (!seen[idx]) {
                  seen[idx] = 1;
                  active.push(idx);
               }
            }
            active.sort(function (a, b) { return a - b; });
         }

         var total = active.length;
         pts = [];

         for (var j = 0; j < total; j++) {
            var y = 1 - ((j + 0.5) * 2) / total;
            var radius = Math.sqrt(Math.max(0, 1 - y * y));
            var theta = j * golden;
            pts.push({ x: Math.cos(theta) * radius, y: y, z: Math.sin(theta) * radius });
         }

         cards.forEach(function (el, i) {
            el.style.display = active.indexOf(i) === -1 ? 'none' : '';
         });
      }

      setActive(N);

      var dims = { rx: 0, ry: 0, rz: 0, offsetY: 0 };
      var rotY = 0.7;
      var rotX = -0.06;
      var velY = 0;
      var velX = 0;
      var dragging = false;
      var lastX = 0;
      var lastY = 0;
      var moved = 0;
      var lastFrame = 0;
      var idleUntil = 0;
      var rafId = 0;
      var visible = true;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function measure() {
         var w = stage.clientWidth || window.innerWidth;
         var h = stage.clientHeight || window.innerHeight;

         var narrow = w < 760 || h < 560;
         var cardW = narrow ? Math.round(clamp(w * 0.3, 84, 132)) : Math.round(clamp(w * 0.15, 96, 216));
         stage.style.setProperty('--beyond-card-w', cardW + 'px');
         setActive(narrow ? 10 : N);

         var gap = clamp(cardW * 0.08, 8, 18);
         var radiusXBase = Math.max((w - cardW - 2 * gap) / 2, 1);
         var tallest = cardW * (1600 / 1060); // portrait cards are the tallest
         var padTop = clamp(h * 0.022, 10, 18);
         var padBottom = clamp(h * 0.018, 8, 16);
         var radiusYBase = Math.max((h - tallest - padTop - padBottom) / 2, 1);
         var k = 3.6 / Math.sqrt(11.96);

         dims.rx = radiusXBase / k;
         dims.ry = radiusYBase / k;
         dims.rz = Math.sqrt(dims.rx * dims.ry);
         dims.offsetY = (padTop - padBottom) / 2;

         paint();
      }

      function paint() {
         var focal = 3.6 * dims.rz;
         var cy = Math.cos(rotY);
         var sy = Math.sin(rotY);
         var cx = Math.cos(rotX);
         var sx = Math.sin(rotX);

         for (var i = 0; i < active.length; i++) {
            var p = pts[i];

            // yaw around Y, then pitch around X
            var x1 = p.x * cy + p.z * sy;
            var z1 = -p.x * sy + p.z * cy;
            var y2 = p.y * cx - z1 * sx;
            var z2 = p.y * sx + z1 * cx;

            var depth = focal / Math.max(focal - z2 * dims.rz, 1.6 * dims.rz);
            var px = x1 * dims.rx * depth;
            var py = -y2 * dims.ry * depth + dims.offsetY;

            var c = (z2 + 1) / 2;
            var front = smoothstep((c - 0.12) / 0.44);
            var far = smoothstep((0.56 - c) / 0.56);

            var el = cards[active[i]];
            var opacity = 0.38 + front * 0.62;
            var blur = far * MAX_BLUR;
            var zIndex = Math.round(200 + 580 * c);
            var tiltY = -x1 * 24;
            var tiltX = y2 * 13;
            var scale = 0.88 + front * 0.12;

            el.style.transform = 'translate3d(' + px.toFixed(2) + 'px,' + py.toFixed(2) + 'px,0) rotateY(' +
               tiltY.toFixed(2) + 'deg) rotateX(' + tiltX.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')';
            el.style.opacity = opacity.toFixed(3);
            el.style.filter = blur >= 0.45 ? 'blur(' + blur.toFixed(2) + 'px)' : 'none';
            el.style.zIndex = zIndex;

            var live = z2 > 0.1;
            if (live !== el.classList.contains('is-live')) el.classList.toggle('is-live', live);
         }
      }

      function frame(now) {
         var dt = Math.min(now - lastFrame, 48) || 16;
         lastFrame = now;

         if (!dragging) {
            if (Math.abs(velY) > 0.000002 || Math.abs(velX) > 0.000002) {
               rotY += velY * dt;
               rotX = clamp(rotX + velX * dt, -PITCH_LIMIT, PITCH_LIMIT);
               var decay = Math.pow(0.94, dt / 16.67);
               velY *= decay;
               velX *= decay;
            } else {
               velY = 0;
               velX = 0;
               if (!reduce && now > idleUntil) rotY += AUTO_SPEED * dt;
            }
         }

         paint();
         rafId = requestAnimationFrame(frame);
      }

      function start() {
         if (rafId || reduce) return;
         lastFrame = performance.now();
         rafId = requestAnimationFrame(frame);
      }

      function stop() {
         if (rafId) cancelAnimationFrame(rafId);
         rafId = 0;
      }

      function onDown(e) {
         dragging = true;
         moved = 0;
         lastX = e.clientX;
         lastY = e.clientY;
         velY = 0;
         velX = 0;
         stage.classList.add('is-dragging');
         try {
            stage.setPointerCapture(e.pointerId);
         } catch (err) {}
      }

      function onMove(e) {
         if (!dragging) return;
         var dx = e.clientX - lastX;
         var dy = e.clientY - lastY;
         lastX = e.clientX;
         lastY = e.clientY;
         moved += Math.abs(dx) + Math.abs(dy);

         var k = clamp(3.45 / (stage.clientWidth || 1440), 0.00345, 0.00885);
         rotY += dx * k;
         rotX = clamp(rotX - dy * k * 0.9, -PITCH_LIMIT, PITCH_LIMIT);
         velY = dx * k * 0.9;
         velX = -dy * k * 0.5;
         idleUntil = performance.now() + 1200;
      }

      function onUp(e) {
         if (!dragging) return;
         dragging = false;
         stage.classList.remove('is-dragging');
         try {
            stage.releasePointerCapture(e.pointerId);
         } catch (err) {}
         idleUntil = performance.now() + 1400;
      }

      stage.addEventListener('pointerdown', onDown);
      stage.addEventListener('pointermove', onMove);
      stage.addEventListener('pointerup', onUp);
      stage.addEventListener('pointercancel', onUp);
      stage.addEventListener('pointerleave', function () {
         if (dragging) onUp({ pointerId: 0 });
      });

      window.addEventListener('resize', measure);
      if (window.ResizeObserver) new ResizeObserver(measure).observe(stage);

      if (window.IntersectionObserver) {
         new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
               visible = entry.isIntersecting;
               if (visible && !document.hidden) start();
               else stop();
            });
         }, { threshold: 0.02 }).observe(stage);
      }

      document.addEventListener('visibilitychange', function () {
         if (document.hidden) stop();
         else if (visible) start();
      });

      measure();
      start();

      return { paint: paint };
   }

   function boot() {
      try {
         initSphere();
      } catch (err) {
         /* keep the rest of the page alive if the effect cannot run */
      }
   }

   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
   } else {
      boot();
   }
   window.addEventListener('load', boot);

   // the site swaps pages with Barba, so re-init whenever the globe reappears
   if (window.MutationObserver && document.body) {
      var pending = 0;
      new MutationObserver(function () {
         if (pending) return;
         pending = window.setTimeout(function () {
            pending = 0;
            boot();
         }, 60);
      }).observe(document.body, { childList: true, subtree: true });
   }
})();
