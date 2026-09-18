/* Furthmac Solutions — static site interactions
   (mobile menu, sticky header state, scroll reveals, lucide icons) */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    // Header state on scroll (only for pages that start transparent)
    var header = document.querySelector(".site-header");
    if (header && !header.classList.contains("solid")) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 20);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Mobile menu toggle
    var btn = document.querySelector(".menu-btn");
    var nav = document.querySelector(".mobile-nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        var iOpen = btn.querySelector(".icon-menu");
        var iClose = btn.querySelector(".icon-close");
        if (iOpen && iClose) {
          iOpen.classList.toggle("hidden", open);
          iClose.classList.toggle("hidden", !open);
        }
      });
    }

    // Scroll reveal
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    }
  });
})();
