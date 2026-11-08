/**
 * data-bg → background-image
 *
 * 原作（dennissnellenberg）用 lazysizes 的 bg 插件把 li 上的 data-bg 写进背景图；
 * 这个仓库只打包了 lazysizes 的图片懒加载部分，没有 bg 插件，
 * 于是「列表悬停预览」的方框一直是空的灰底。
 * 这里用一个极小的替代实现补上：首次进入列表区时统一赋值，之后交给浏览器缓存。
 */
(function () {
   var done = false;

   function apply(el) {
      var src = el.getAttribute('data-bg');
      if (!src) return;
      el.style.backgroundImage = 'url("' + src + '")';
   }

   function loadAll() {
      if (done) return;
      done = true;
      var els = document.querySelectorAll('[data-bg]');
      for (var i = 0; i < els.length; i++) apply(els[i]);
   }

   function init() {
      var wrap = document.querySelector('.mouse-pos-list-image-wrap, .work-items, .work-tiles');
      if (wrap) {
         wrap.addEventListener('mouseenter', loadAll, { once: true, passive: true });
         wrap.addEventListener('touchstart', loadAll, { once: true, passive: true });
      }
      // 兜底：页面滚到列表附近、或用户首次移动鼠标时再加载
      window.addEventListener('scroll', loadAll, { once: true, passive: true });
      document.addEventListener('mousemove', loadAll, { once: true, passive: true });
      // 视口较矮时列表可能一开始就在视野内，直接加载
      setTimeout(loadAll, 2500);
   }

   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
   } else {
      init();
   }
})();
