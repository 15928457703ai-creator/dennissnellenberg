/* ------------------------------------------------------------------
   How we build — carousel behaviour
   arrows + drag with inertia + video autoplay + lightbox
   ------------------------------------------------------------------ */
(function () {
   'use strict';

   var openedLightbox = null;

   function getLightbox() {
      if (openedLightbox) return openedLightbox;

      var box = document.createElement('div');
      box.className = 'hwb-lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.innerHTML =
         '<div class="hwb-lightbox__inner">' +
         '<button class="hwb-lightbox__close" type="button" aria-label="Close">&#10005;</button>' +
         '<video controls playsinline preload="none"></video>' +
         '<p class="hwb-lightbox__cap"><strong></strong><span></span></p>' +
         '</div>';

      document.body.appendChild(box);

      var video = box.querySelector('video');

      function close() {
         box.classList.remove('is-open');
         document.body.classList.remove('hwb-lock');
         video.pause();
         video.removeAttribute('src');
         video.load();
      }

      box.addEventListener('click', function (e) {
         if (e.target === box || e.target.closest('.hwb-lightbox__close')) close();
      });

      document.addEventListener('keydown', function (e) {
         if (e.key === 'Escape' && box.classList.contains('is-open')) close();
      });

      openedLightbox = {
         open: function (src, poster, title, meta) {
            if (poster) video.setAttribute('poster', poster);
            video.src = src;
            box.querySelector('strong').textContent = title;
            box.querySelector('span').textContent = meta;
            box.classList.add('is-open');
            document.body.classList.add('hwb-lock');
            video.play().catch(function () {});
         },
         close: close,
         el: box
      };

      return openedLightbox;
   }

   function initHowWeBuild() {
      var section = document.querySelector('.hwb');
      if (!section || section.dataset.hwbReady === '1') return;
      section.dataset.hwbReady = '1';

      var track = section.querySelector('.hwb__track');
      if (!track) return;

      var cards = [].slice.call(track.querySelectorAll('.hwb__card'));
      var prevBtn = section.querySelector('[data-hwb-prev]');
      var nextBtn = section.querySelector('[data-hwb-next]');

      function stepSize() {
         var first = cards[0];
         if (!first) return 320;
         var styles = window.getComputedStyle(track);
         var gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
         return first.getBoundingClientRect().width + gap;
      }

      function syncControls() {
         var max = track.scrollWidth - track.clientWidth;
         if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
         if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 2;
      }

      if (prevBtn) {
         prevBtn.addEventListener('click', function () {
            track.scrollBy({ left: -stepSize(), behavior: 'smooth' });
         });
      }
      if (nextBtn) {
         nextBtn.addEventListener('click', function () {
            track.scrollBy({ left: stepSize(), behavior: 'smooth' });
         });
      }

      track.addEventListener('scroll', syncControls, { passive: true });
      window.addEventListener('resize', syncControls);

      /* ---------- drag to scroll with inertia ---------- */
      var dragging = false;
      var startX = 0;
      var startLeft = 0;
      var lastX = 0;
      var lastTime = 0;
      var velocity = 0;
      var moved = false;
      var glideFrame = null;

      track.addEventListener('pointerdown', function (e) {
         if (e.pointerType === 'mouse' && e.button !== 0) return;
         dragging = true;
         moved = false;
         startX = e.clientX;
         startLeft = track.scrollLeft;
         lastX = e.clientX;
         lastTime = performance.now();
         velocity = 0;
         if (glideFrame) {
            cancelAnimationFrame(glideFrame);
            glideFrame = null;
         }
         track.classList.add('is-dragging');
      });

      window.addEventListener('pointermove', function (e) {
         if (!dragging) return;
         var delta = e.clientX - startX;
         if (Math.abs(delta) > 5) moved = true;
         track.scrollLeft = startLeft - delta;

         var now = performance.now();
         var dt = Math.max(now - lastTime, 8);
         velocity = Math.max(-3, Math.min(3, (e.clientX - lastX) / dt));
         lastX = e.clientX;
         lastTime = now;
      });

      function endDrag() {
         if (!dragging) return;
         dragging = false;
         track.classList.remove('is-dragging');

         var momentum = Math.max(-70, Math.min(70, velocity * 12));
         function glide() {
            if (Math.abs(momentum) < 0.5) return;
            track.scrollLeft -= momentum;
            momentum *= 0.94;
            glideFrame = requestAnimationFrame(glide);
         }
         glide();
      }

      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
      window.addEventListener('blur', endDrag);

      /* stop the click from firing right after a drag */
      track.addEventListener(
         'click',
         function (e) {
            if (moved) {
               e.preventDefault();
               e.stopPropagation();
               moved = false;
            }
         },
         true
      );

      /* ---------- play previews when visible ---------- */
      var videos = [].slice.call(track.querySelectorAll('video'));

      if ('IntersectionObserver' in window) {
         var io = new IntersectionObserver(
            function (entries) {
               entries.forEach(function (entry) {
                  var v = entry.target.querySelector('video');
                  if (!v) return;
                  if (entry.isIntersecting) {
                     if (!v.dataset.loaded) {
                        v.dataset.loaded = '1';
                        v.load();
                     }
                     var playing = v.play();
                     if (playing && playing.catch) playing.catch(function () {});
                  } else if (!v.paused) {
                     v.pause();
                  }
               });
            },
            { threshold: 0.3 }
         );
         cards.forEach(function (card) {
            io.observe(card);
         });
      }

      document.addEventListener('visibilitychange', function () {
         videos.forEach(function (v) {
            if (document.hidden) v.pause();
         });
      });

      /* ---------- open video ---------- */
      cards.forEach(function (card) {
         var poster = card.querySelector('.hwb__poster');
         var video = card.querySelector('video');
         if (!poster || !video) return;

         poster.addEventListener('click', function () {
            var h3 = card.querySelector('h3');
            var meta = card.querySelector('.hwb__caption p');
            getLightbox().open(
               video.getAttribute('src'),
               video.getAttribute('poster'),
               h3 ? h3.textContent : '',
               meta ? meta.textContent : ''
            );
         });
      });

      syncControls();
   }

   window.initHowWeBuild = initHowWeBuild;

   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initHowWeBuild);
   } else {
      initHowWeBuild();
   }
})();
